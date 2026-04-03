import Message from "../model/Message.js";
import Community from "../model/Community.js";

// ── Main handler ───────────────────────────────────
const registerGroupChat = (io, socket) => {
  const userId = socket.userId;

  // ── group:join ──────────────────────────────────
  // Join a community chat room
  socket.on("group:join", async ({ communityId }) => {
    if (!communityId) {
      socket.emit("group:error", { message: "Community ID is required" });
      return;
    }

    try {
      // verify user is a member of this community
      const community = await Community.findById(communityId).select("members name");

      if (!community) {
        socket.emit("group:error", { message: "Community not found" });
        return;
      }

      const isMember = community.members.some(
        (m) => m.toString() === userId.toString()
      );

      if (!isMember) {
        socket.emit("group:error", { message: "Join the community first to access group chat" });
        return;
      }

      // join the socket room
      const roomId = `group_${communityId}`;
      socket.join(roomId);

      // store joined rooms on socket for cleanup on disconnect
      if (!socket.joinedGroups) socket.joinedGroups = new Set();
      socket.joinedGroups.add(roomId);

      socket.emit("group:joined", {
        communityId,
        roomId,
        communityName: community.name,
        message: `Joined ${community.name} chat`,
      });

      // notify others in room
      socket.to(roomId).emit("group:user-joined", {
        userId,
        communityId,
      });

      console.log(`👥 ${userId} joined group: ${community.name}`);
    } catch (err) {
      console.error("group:join error:", err.message);
      socket.emit("group:error", { message: "Failed to join community chat" });
    }
  });

  // ── group:message ───────────────────────────────
  // Send a message to a community — saved to MongoDB
  socket.on("group:message", async ({ communityId, content }) => {
    if (!communityId || !content?.trim()) {
      socket.emit("group:error", { message: "Community ID and content are required" });
      return;
    }

    try {
      // verify membership before sending
      const community = await Community.findById(communityId).select("members");

      if (!community) {
        socket.emit("group:error", { message: "Community not found" });
        return;
      }

      const isMember = community.members.some(
        (m) => m.toString() === userId.toString()
      );

      if (!isMember) {
        socket.emit("group:error", { message: "You are not a member of this community" });
        return;
      }

      // save to DB
      const message = await Message.create({
        sender:    userId,
        community: communityId,
        content:   content.trim(),
        type:      "group",
      });

      await message.populate("sender", "username avatar");

      const payload = {
        _id:         message._id,
        sender:      message.sender,
        communityId,
        content:     message.content,
        createdAt:   message.createdAt,
      };

      // broadcast to all in room including sender
      const roomId = `group_${communityId}`;
      io.to(roomId).emit("group:message", payload);

      console.log(`📢 Group msg: ${userId} → community ${communityId}`);
    } catch (err) {
      console.error("group:message error:", err.message);
      socket.emit("group:error", { message: "Failed to send message" });
    }
  });

  // ── group:history ───────────────────────────────
  // Fetch community chat history
  socket.on("group:history", async ({ communityId, page = 1, limit = 30 }) => {
    if (!communityId) {
      socket.emit("group:error", { message: "Community ID is required" });
      return;
    }

    try {
      const messages = await Message.find({
        community: communityId,
        type:      "group",
      })
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("sender", "username avatar");

      socket.emit("group:history", {
        communityId,
        messages: messages.reverse(),
        page,
        hasMore: messages.length === limit,
      });
    } catch (err) {
      console.error("group:history error:", err.message);
      socket.emit("group:error", { message: "Failed to fetch history" });
    }
  });

  // ── group:typing ────────────────────────────────
  // Relay typing indicator to community room
  socket.on("group:typing", ({ communityId, isTyping }) => {
    if (!communityId) return;

    const roomId = `group_${communityId}`;
    socket.to(roomId).emit("group:typing", {
      userId,
      communityId,
      isTyping,
    });
  });

  // ── group:leave ─────────────────────────────────
  // Leave a community chat room
  socket.on("group:leave", ({ communityId }) => {
    if (!communityId) return;

    const roomId = `group_${communityId}`;
    socket.leave(roomId);

    if (socket.joinedGroups) socket.joinedGroups.delete(roomId);

    socket.emit("group:left", { communityId });

    // notify others
    socket.to(roomId).emit("group:user-left", { userId, communityId });

    console.log(`🚪 ${userId} left group: ${communityId}`);
  });

  // ── handle disconnect ────────────────────────────
  // auto leave all group rooms on disconnect
  socket.on("disconnect", () => {
    if (!socket.joinedGroups) return;
    for (const roomId of socket.joinedGroups) {
      const communityId = roomId.replace("group_", "");
      socket.to(roomId).emit("group:user-left", { userId, communityId });
    }
  });
};

export default registerGroupChat;