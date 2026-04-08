import FriendsRequest from "../model/FriendsRequest.js";
import { createNotification } from "../controllers/notification.controller.js";
import { onlineUsers } from "./onlineUsers.js";

// ── In-memory stores ───────────────────────────────

// userId → { socketId, username, interests, handle }
const waitingPool = new Map();

// userId → { partnerUserId, roomId, handle, partnerHandle }
const activeRooms = new Map();

// socketId → userId
const socketToUser = new Map();

// ── Helpers ────────────────────────────────────────
const generateAnonHandle = () => {
  const cities = ["Mumbai", "Pune", "Delhi", "Blr", "Hyd", "Chennai", "Kolkata", "Jaipur"];
  return `@Anon[${cities[Math.floor(Math.random() * cities.length)]}]`;
};

const findMatch = (currentUserId, currentInterests = []) => {
  let fallbackMatch = null;

  for (const [userId, data] of waitingPool.entries()) {
    if (userId === currentUserId) continue;
    
    // Do not match with disconnected users that are still in pool
    if (!onlineUsers.has(userId)) continue;

    if (!fallbackMatch) fallbackMatch = { userId, ...data };

    if (currentInterests.length && data.interests?.length) {
      const hasOverlap = currentInterests.some(i => data.interests.includes(i));
      if (hasOverlap) return { userId, ...data };
    }
  }

  return fallbackMatch;
};

// ── Main handler ───────────────────────────────────
const registerAnonChat = (io, socket) => {
  const userId = socket.userId;
  const username = socket.username;

  socketToUser.set(socket.id, userId);
  onlineUsers.set(userId, socket.id);

  console.log(`🟢 Connected: ${userId}`);

  // 🔁 RECONNECT HANDLING
  if (activeRooms.has(userId)) {
    const room = activeRooms.get(userId);

    socket.emit("anon:matched", {
      roomId: room.roomId,
      partnerHandle: room.partnerHandle,
      myHandle: room.handle,
    });

    const partnerSocketId = onlineUsers.get(room.partnerUserId);
    if (partnerSocketId) {
      io.to(partnerSocketId).emit("anon:partner-reconnected");
    }

    console.log(`🔁 Reconnected session restored: ${userId}`);
  }

  const handleJoin = ({ interests = [] } = {}) => {
    if (activeRooms.has(userId)) {
      socket.emit("anon:error", { message: "Already in chat" });
      return;
    }

    const match = findMatch(userId, interests);

    if (match) {
      waitingPool.delete(match.userId);

      const roomId = `anon_${userId}_${match.userId}`;

      const myHandle = generateAnonHandle();
      const partnerHandle = match.handle;

      activeRooms.set(userId, {
        partnerUserId: match.userId,
        roomId,
        handle: myHandle,
        partnerHandle,
      });

      activeRooms.set(match.userId, {
        partnerUserId: userId,
        roomId,
        handle: partnerHandle,
        partnerHandle: myHandle,
      });

      socket.emit("anon:matched", {
        roomId,
        partnerHandle,
        myHandle,
        interests: match.interests,
      });

      const partnerSocketId = onlineUsers.get(match.userId);
      if (partnerSocketId) {
        io.to(partnerSocketId).emit("anon:matched", {
          roomId,
          partnerHandle: myHandle,
          myHandle: partnerHandle,
          interests,
        });
      }

      console.log(`✅ Match: ${userId} ↔ ${match.userId}`);
    } else {
      const handle = generateAnonHandle();

      waitingPool.set(userId, {
        socketId: socket.id,
        username,
        interests,
        handle,
      });

      socket.emit("anon:waiting");
    }
  };

  // ── JOIN ───────────────────────────────────────
  socket.on("anon:join", handleJoin);

  // ── MESSAGE ─────────────────────────────────────
  socket.on("anon:message", ({ content }) => {
    if (!content?.trim()) return;

    const room = activeRooms.get(userId);
    if (!room) return;

    const partnerSocketId = onlineUsers.get(room.partnerUserId);
    if (!partnerSocketId) return;

    const payload = {
      content: content.trim(),
      from: room.handle,
      timestamp: new Date().toISOString(),
    };

    io.to(partnerSocketId).emit("anon:message", payload);
    socket.emit("anon:message:sent", { ...payload, from: "You" });
  });

  // ── SKIP ────────────────────────────────────────
  socket.on("anon:skip", ({ interests = [] } = {}) => {
    const room = activeRooms.get(userId);

    if (room) {
      const partnerSocketId = onlineUsers.get(room.partnerUserId);

      if (partnerSocketId) {
        io.to(partnerSocketId).emit("anon:partner-left");
      }

      activeRooms.delete(room.partnerUserId);
      activeRooms.delete(userId);
    }

    waitingPool.delete(userId);

    // After skipping and clearing old room, find a new match
    handleJoin({ interests });
  });

  // ── LEAVE ───────────────────────────────────────
  socket.on("anon:leave", () => {
    cleanup(io, userId);
    socket.emit("anon:ended");
  });

  // ── FRIEND REQUEST ──────────────────────────────
  socket.on("anon:friend-request", async () => {
    const room = activeRooms.get(userId);
    if (!room) return;

    const receiverId = room.partnerUserId;

    try {
      const existing = await FriendsRequest.findOne({
        $or: [
          { sender: userId, receiver: receiverId },
          { sender: receiverId, receiver: userId },
        ],
        status: "pending",
      });

      if (existing) {
        socket.emit("anon:error", { message: "Already sent" });
        return;
      }

      const req = await FriendsRequest.create({
        sender: userId,
        receiver: receiverId,
      });

      await createNotification(receiverId, "friend_request", req._id);

      socket.emit("anon:friend-request:sent");

      const receiverSocketId = onlineUsers.get(receiverId);
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("notification:new", {
          type: "friend_request",
          sender: { username: room.partnerHandle },
        });
      }
    } catch (err) {
      socket.emit("anon:error", { message: "Failed" });
    }
  });

  // ── DISCONNECT WITH GRACE ───────────────────────
  socket.on("disconnect", () => {
    const uid = socketToUser.get(socket.id);

    socketToUser.delete(socket.id);
    onlineUsers.delete(uid);

    console.log(`⚠️ Disconnect: ${uid}`);

    setTimeout(() => {
      if (onlineUsers.has(uid)) return;

      const room = activeRooms.get(uid);

      if (room) {
        const partnerSocketId = onlineUsers.get(room.partnerUserId);

        if (partnerSocketId) {
          io.to(partnerSocketId).emit("anon:partner-left");
        }

        activeRooms.delete(room.partnerUserId);
        activeRooms.delete(uid);
      }

      waitingPool.delete(uid);

      console.log(`❌ Cleaned: ${uid}`);
    }, 10000);
  });
};

// ── CLEANUP ───────────────────────────────────────
const cleanup = (io, userId) => {
  const room = activeRooms.get(userId);

  if (room) {
    const partnerSocketId = onlineUsers.get(room.partnerUserId);

    if (partnerSocketId) {
      io.to(partnerSocketId).emit("anon:partner-left");
    }

    activeRooms.delete(room.partnerUserId);
    activeRooms.delete(userId);
  }

  waitingPool.delete(userId);
};

export default registerAnonChat;