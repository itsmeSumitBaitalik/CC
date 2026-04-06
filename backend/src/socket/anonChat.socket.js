import FriendsRequest from "../model/FriendsRequest.js";
import { createNotification } from "../controllers/notification.controller.js";
import { onlineUsers } from "./onlineUsers.js";

// ── In-memory stores ───────────────────────────────
// userId → { socketId, username, interests }
const waitingPool = new Map();

// socketId → { partnerId: socketId, userId, partnerUserId }
const activeRooms = new Map();

// ── Helpers ────────────────────────────────────────
const generateAnonHandle = () => {
  const cities = ["Mumbai", "Pune", "Delhi", "Blr", "Hyd", "Chennai", "Kolkata", "Jaipur"];
  return `@Anon[${cities[Math.floor(Math.random() * cities.length)]}]`;
};

/**
 * Finds a match for the current user.
 * 1. Tries to match by at least one overlapping interest.
 * 2. If no interest match, falls back to the oldest waiting user.
 */
const findMatch = (currentUserId, currentInterests = []) => {
  let fallbackMatch = null;

  for (const [userId, data] of waitingPool.entries()) {
    if (userId === currentUserId) continue;

    // Track the first available person as a fallback
    if (!fallbackMatch) fallbackMatch = { userId, ...data };

    // Check for interest overlap
    if (currentInterests.length > 0 && data.interests && data.interests.length > 0) {
      const hasOverlap = currentInterests.some(interest => data.interests.includes(interest));
      if (hasOverlap) {
        console.log(`🎯 Interest Match: ${currentUserId} ↔ ${userId} [${currentInterests.filter(i => data.interests.includes(i))}]`);
        return { userId, ...data };
      }
    }
  }

  if (fallbackMatch) {
    console.log(`🎲 Fallback Match: ${currentUserId} ↔ ${fallbackMatch.userId}`);
  }
  return fallbackMatch;
};

// ── Main handler ───────────────────────────────────
const registerAnonChat = (io, socket) => {
  const userId   = socket.userId;   // attached by auth middleware
  const username = socket.username; // attached by auth middleware

  // track online users
  onlineUsers.set(userId, socket.id);

  // ── anon:join ──────────────────────────────────
  // Client emits when user clicks "Find a Chat"
  socket.on("anon:join", ({ interests = [] } = {}) => {
    // if already in an active room, ignore
    if (activeRooms.has(socket.id)) {
      socket.emit("anon:error", { message: "You are already in a chat. Skip first." });
      return;
    }

    console.log(`🔍 ${username} [${userId}] searching for match with interests:`, interests);

    // check if a match is available in waiting pool
    const match = findMatch(userId, interests);

    if (match) {
      // ── Match found ──────────────────────────
      waitingPool.delete(match.userId);

      const roomId = `anon_${socket.id}_${match.socketId}`;
      const myHandleForPartner = generateAnonHandle();
      const partnerHandleForMe = match.handle; // The handle they already had in the pool

      // store active room for both sides
      // Current user
      activeRooms.set(socket.id, {
        partnerId:     match.socketId,
        userId,
        partnerUserId: match.userId,
        roomId,
        handle:        myHandleForPartner,
        partnerHandle: partnerHandleForMe,
      });

      // Partner user
      activeRooms.set(match.socketId, {
        partnerId:     socket.id,
        userId:        match.userId,
        partnerUserId: userId,
        roomId,
        handle:        partnerHandleForMe,
        partnerHandle: myHandleForPartner,
      });

      // notify both users
      socket.emit("anon:matched", {
        roomId,
        partnerHandle: partnerHandleForMe,
        myHandle:      myHandleForPartner,
        interests:     match.interests,
      });

      io.to(match.socketId).emit("anon:matched", {
        roomId,
        partnerHandle: myHandleForPartner,
        myHandle:      partnerHandleForMe,
        interests,
      });

      console.log(`✅ Anon match: ${username} ↔ ${match.username}`);
    } else {
      // ── No match yet — add to waiting pool ───
      const handle = generateAnonHandle();
      waitingPool.set(userId, { socketId: socket.id, username, interests, handle });
      socket.emit("anon:waiting", { message: "Looking for someone to chat with..." });
      console.log(`⏳ ${username} [${userId}] added to waiting pool as ${handle}`);
    }
  });

  // ── anon:message ────────────────────────────────
  // Relay message to partner — NOT saved to DB
  socket.on("anon:message", ({ content }) => {
    if (!content?.trim()) return;

    const room = activeRooms.get(socket.id);
    if (!room) {
      socket.emit("anon:error", { message: "You are not in a chat session" });
      return;
    }

    const payload = {
      content:   content.trim(),
      from:      room.handle,       // anon handle, not real name
      timestamp: new Date().toISOString(),
    };

    // send to partner only
    io.to(room.partnerId).emit("anon:message", payload);

    // echo back to sender with same shape
    socket.emit("anon:message:sent", { ...payload, from: "You" });
  });

  // ── anon:skip ───────────────────────────────────
  // Leave current room and look for a new match
  socket.on("anon:skip", ({ interests = [] } = {}) => {
    const room = activeRooms.get(socket.id);

    if (room) {
      // notify partner
      io.to(room.partnerId).emit("anon:partner-left", {
        message: "Your chat partner skipped. Finding a new match...",
      });

      // clean up partner's room entry
      activeRooms.delete(room.partnerId);

      // put partner back in waiting pool
      const partnerSocket = io.sockets.sockets.get(room.partnerId);
      if (partnerSocket) {
        waitingPool.set(room.partnerUserId, {
          socketId:  room.partnerId,
          username:  partnerSocket.username,
          interests: [],
          handle:    generateAnonHandle(),
        });
        io.to(room.partnerId).emit("anon:waiting", { message: "Looking for someone to chat with..." });
      }

      // clean up current user's room
      activeRooms.delete(socket.id);
    }

    // remove from waiting pool if they were waiting
    waitingPool.delete(userId);

    // re-join pool to find new match
    const match = findMatch(userId, interests);

    if (match) {
      waitingPool.delete(match.userId);
      const roomId = `anon_${socket.id}_${match.socketId}`;
      const myHandleForPartner = generateAnonHandle();
      const partnerHandleForMe = match.handle;

      activeRooms.set(socket.id, {
        partnerId: match.socketId,
        userId,
        partnerUserId: match.userId,
        roomId,
        handle: myHandleForPartner,
        partnerHandle: partnerHandleForMe,
      });

      activeRooms.set(match.socketId, {
        partnerId: socket.id,
        userId: match.userId,
        partnerUserId: userId,
        roomId,
        handle: partnerHandleForMe,
        partnerHandle: myHandleForPartner,
      });

      socket.emit("anon:matched", {
        roomId,
        partnerHandle: partnerHandleForMe,
        myHandle: myHandleForPartner,
        interests: match.interests,
      });

      io.to(match.socketId).emit("anon:matched", {
        roomId,
        partnerHandle: myHandleForPartner,
        myHandle: partnerHandleForMe,
        interests,
      });

      console.log(`✅ Anon match (after skip): ${username} ↔ ${match.username}`);
    } else {
      const handle = generateAnonHandle();
      waitingPool.set(userId, { socketId: socket.id, username, interests, handle });
      socket.emit("anon:waiting", { message: "Looking for someone to chat with..." });
      console.log(`⏳ ${username} [${userId}] added back to waiting pool as ${handle}`);
    }
  });

  // ── anon:leave ──────────────────────────────────
  // End session completely — go back to lobby
  socket.on("anon:leave", () => {
    cleanupAnonSession(io, socket, userId);
    socket.emit("anon:ended", { message: "Chat session ended" });
  });

  // ── anon:friend-request ─────────────────────────
  // Send friend request to current anon partner
  socket.on("anon:friend-request", async () => {
    const room = activeRooms.get(socket.id);

    if (!room) {
      socket.emit("anon:error", { message: "You are not in a chat session" });
      return;
    }

    const receiverId = room.partnerUserId;

    try {
      // check for existing request
      const existing = await FriendsRequest.findOne({
        $or: [
          { sender: userId,     receiver: receiverId },
          { sender: receiverId, receiver: userId },
        ],
        status: "pending",
      });

      if (existing) {
        socket.emit("anon:error", { message: "Friend request already sent" });
        return;
      }

      // create friend request in DB
      const friendRequest = await FriendsRequest.create({
        sender:   userId,
        receiver: receiverId,
      });

      // create notification for receiver
      await createNotification(receiverId, "friend_request", friendRequest._id);

      // notify sender
      socket.emit("anon:friend-request:sent", {
        success: true,
        message: "Friend request sent!",
      });

      // notify receiver in real time if they are online
      const receiverSocketId = onlineUsers.get(receiverId);
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("notification:new", {
          type:      "friend_request",
          message:   null,
          sender:    { username: room.partnerHandle }, // show anon handle
          referenceId: friendRequest._id,
        });
      }

      console.log(`👋 Friend request: ${userId} → ${receiverId}`);
    } catch (err) {
      console.error("anon:friend-request error:", err.message);
      socket.emit("anon:error", { message: "Failed to send friend request" });
    }
  });

  // ── Handle disconnect ────────────────────────────
  socket.on("disconnect", () => {
    cleanupAnonSession(io, socket, userId);
    onlineUsers.delete(userId);
    console.log(`❌ Anon disconnect: ${userId}`);
  });
};

// ── Cleanup helper ─────────────────────────────────
const cleanupAnonSession = (io, socket, userId) => {
  const room = activeRooms.get(socket.id);

  if (room) {
    io.to(room.partnerId).emit("anon:partner-left", {
      message: "Your chat partner has left the session.",
    });
    activeRooms.delete(room.partnerId);
    activeRooms.delete(socket.id);
  }

  waitingPool.delete(userId);
};

export { onlineUsers };
export default registerAnonChat;