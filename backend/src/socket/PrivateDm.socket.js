import Message from "../model/Message.js";
import { onlineUsers } from "./onlineUsers.js";

// ── Main handler ───────────────────────────────────
const registerDMChat = (io, socket) => {
  const userId = socket.userId;

  // ── dm:send ─────────────────────────────────────
  // Send a message to a friend — saved to MongoDB
  socket.on("dm:send", async ({ receiverId, content }) => {
    if (!receiverId || !content?.trim()) {
      socket.emit("dm:error", { message: "Receiver and content are required" });
      return;
    }

    try {
      // save to DB
      const message = await Message.create({
        sender:   userId,
        receiver: receiverId,
        content:  content.trim(),
        type:     "dm",
      });

      await message.populate("sender", "username avatar");

      const payload = {
        _id:       message._id,
        sender:    message.sender,
        content:   message.content,
        isRead:    message.isRead,
        createdAt: message.createdAt,
      };

      // emit to sender
      socket.emit("dm:message", payload);

      // emit to receiver if online
      const receiverSocketId = onlineUsers.get(receiverId);
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("dm:message", payload);
      }

      console.log(`💬 DM: ${userId} → ${receiverId}`);
    } catch (err) {
      console.error("dm:send error:", err.message);
      socket.emit("dm:error", { message: "Failed to send message" });
    }
  });

  // ── dm:history ──────────────────────────────────
  // Fetch conversation history between two users
  socket.on("dm:history", async ({ friendId, page = 1, limit = 30 }) => {
    if (!friendId) {
      socket.emit("dm:error", { message: "Friend ID is required" });
      return;
    }

    try {
      const messages = await Message.find({
        type: "dm",
        $or: [
          { sender: userId,   receiver: friendId },
          { sender: friendId, receiver: userId   },
        ],
      })
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("sender", "username avatar");

      // return in chronological order
      socket.emit("dm:history", {
        messages:  messages.reverse(),
        page,
        hasMore:   messages.length === limit,
        friendId,
      });
    } catch (err) {
      console.error("dm:history error:", err.message);
      socket.emit("dm:error", { message: "Failed to fetch history" });
    }
  });

  // ── dm:read ─────────────────────────────────────
  // Mark all messages from a friend as read
  socket.on("dm:read", async ({ friendId }) => {
    if (!friendId) return;

    try {
      await Message.updateMany(
        { sender: friendId, receiver: userId, isRead: false, type: "dm" },
        { isRead: true, readAt: new Date() }
      );

      // notify sender their messages were read
      const friendSocketId = onlineUsers.get(friendId);
      if (friendSocketId) {
        io.to(friendSocketId).emit("dm:read:confirmed", {
          by:       userId,
          friendId: userId,
          readAt:   new Date().toISOString(),
        });
      }

      socket.emit("dm:read:done", { friendId });
    } catch (err) {
      console.error("dm:read error:", err.message);
    }
  });

  // ── dm:typing ───────────────────────────────────
  // Relay typing indicator to friend
  socket.on("dm:typing", ({ receiverId, isTyping }) => {
    if (!receiverId) return;

    const receiverSocketId = onlineUsers.get(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("dm:typing", {
        from:     userId,
        isTyping,
      });
    }
  });

  // ── dm:unread-count ─────────────────────────────
  // Get total unread message count for badge
  socket.on("dm:unread-count", async () => {
    try {
      const count = await Message.countDocuments({
        receiver: userId,
        isRead:   false,
        type:     "dm",
      });

      socket.emit("dm:unread-count", { count });
    } catch (err) {
      console.error("dm:unread-count error:", err.message);
    }
  });
};

export default registerDMChat;