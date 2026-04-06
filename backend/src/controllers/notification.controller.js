import mongoose from "mongoose";
import FriendsRequest from "../model/FriendsRequest.js";
import Notification from "../model/Notification.js";
import User from "../model/User.js";
import { onlineUsers } from "../socket/onlineUsers.js";

//Notification controller
export const createNotification = async (userId, type, referenceId, message) => {
  try {
    await Notification.create({
      user: new mongoose.Types.ObjectId(userId),
      type,
      referenceId,
      message
    });
  } catch (error) {
    console.error("Error sending notification:", error);
  }
};

export const getNotifications = async (req, res) => {
  try {
    const userId = req.user.id;

    const notifications = await Notification.find({ 
      user: userId,
      isRead: { $ne: true } // Only fetch unread notifications
    })
      .populate({ 
        path: 'referenceId', 
        populate: { path: 'sender', select: 'username email' } 
      })
      .sort({ createdAt: -1 });

    // Filter out notifications where the friend request is no longer pending
    const validNotifications = notifications.filter(notification => {
      if (notification.type === 'friend_request' && notification.referenceId) {
        return notification.referenceId.status === 'pending';
      }
      return true; // Keep other notification types
    });

    return res.status(200).json({ notifications: validNotifications });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

//Friend request controller
export const sendFriendRequest = async (req, res) => {
  const senderId = req.user.id;
  const receiverId = req.params.receiverId;
  try {
    // 0️⃣ Basic validation
    if (!senderId || !receiverId) {
      return res.status(400).json({ message: "Missing user IDs" });
    }

    if (senderId === receiverId) {
      return res
        .status(400)
        .json({ message: "Cannot send request to yourself" });
    }

    // 1️⃣ Prevent duplicate or reverse duplicate requests
    const existing = await FriendsRequest.findOne({
      $or: [
        { sender: senderId, receiver: receiverId },
        { sender: receiverId, receiver: senderId },
      ],
      status: "pending",
    });

    if (existing) {
      return res.status(400).json({ message: "Friend request already exists" });
    }

    console.log("senderId", senderId);
    console.log("receiverId", receiverId);
    // 2️⃣ Create Friend Request
    const friendRequest = await FriendsRequest.create({
      sender: senderId,
      receiver: receiverId,
    });

    // 3️⃣ Create Notification (stored only)
    const notification = await Notification.create({
      user: new mongoose.Types.ObjectId(receiverId),
      type: "friend_request",
      referenceId: friendRequest.id,
    });

    // 4️⃣ Emit to receiver if online
    const io = req.app.get("io");
    if (io) {
      const receiverSocketId = onlineUsers.get(receiverId);
      if (receiverSocketId) {
        // Fetch sender's data for UI
        const sender = await User.findById(senderId).select("username fname lname");
        io.to(receiverSocketId).emit("notification:new", {
          _id:         notification._id,
          type:        "friend_request",
          referenceId: { ...friendRequest.toObject(), sender },
          createdAt:   notification.createdAt,
        });
      }
    }

    res.status(201).json({
      success: true,
      message: "Friend request sent",
      senderId
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const responseRequest = async (req, res) => {
  try {
    const userId = req.user.id;
    let { status } = req.body;
    let requestId = req.params.requestId;

    if (status) status = status.toLowerCase();

    if (!["accepted", "rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status. Use 'accepted' or 'rejected'." });
    }

    if (!mongoose.Types.ObjectId.isValid(requestId)) {
      return res.status(400).json({ message: "Invalid Request ID format" });
    }

    // 1️⃣ Find the request (check if ID is FriendRequest or Notification)
    let request = await FriendsRequest.findById(requestId);

    if (!request) {
      // If not found in FriendsRequest, maybe it's a Notification ID
      const notification = await Notification.findById(requestId);
      if (notification && notification.type === "friend_request") {
        requestId = notification.referenceId;
        request = await FriendsRequest.findById(requestId);
      }
    }

    if (!request) {
      return res.status(404).json({ message: "Request not found" });
    }

    // 2️⃣ Authorization & Status check
    if (request.receiver.toString() !== userId) {
      return res.status(403).json({ message: "Not Authorized" });
    }

    if (request.status !== "pending") {
      return res.status(400).json({ message: "Request already responded" });
    }

    // 3️⃣ Update request status
    request.status = status;
    await request.save();

    // 4️⃣ Mark the notification as read/handled
    await Notification.updateMany(
      { 
        user: userId,
        type: "friend_request",
        referenceId: request._id
      },
      { 
        isRead: true 
      }
    );

    // 5️⃣ If accepted, update both users' friend lists
    if (status === "accepted") {
      await User.findByIdAndUpdate(request.sender, {
        $addToSet: { friends: request.receiver },
      });
      await User.findByIdAndUpdate(request.receiver, {
        $addToSet: { friends: request.sender },
      });
    }

    // 6️⃣ Notify the sender
    const notification = await Notification.create({
      user: new mongoose.Types.ObjectId(request.sender),
      type: "friend_request_response",
      referenceId: request._id,
      message: `Your friend request was ${status}`
    });

    // 7️⃣ Emit to sender if online
    const io = req.app.get("io");
    if (io) {
      const senderSocketId = onlineUsers.get(request.sender.toString());
      if (senderSocketId) {
        io.to(senderSocketId).emit("notification:new", {
          _id:       notification._id,
          type:      "friend_request_response",
          message:   notification.message,
          createdAt: notification.createdAt,
        });
      }
    }

    res.json({
      success: true,
      message: `Friend request ${status}`,
    });

  } catch (error) {
    console.error("Error in responseRequest:", error);
    res.status(500).json({ error: error.message });
  }
};

export const getRequest = async (req, res) => {
  try {
    const userId = req.user.id;

    const request = await FriendsRequest.find({
      receiver: userId,
      status: "pending",
    }).populate("sender", "username email");

    res.json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};