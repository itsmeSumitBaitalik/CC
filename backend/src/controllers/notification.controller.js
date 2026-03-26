import FriendsRequest from "../model/Friends.js";
import Notification from "../model/Notification.js";

//Notification controller
export const createNotification = async (userId, type, referenceId,message) => {
  try {
    await Notification.create({
      user: userId,
      type,
      referenceId,
      message
    });
  } catch (error) {
    console.error("Error sending notification:", error);
  }
};

export const getNotifications = async (req, res) => {
  const userId = req.user.id;

  try {
    if (!userId) {
      return res.status(400).json({ message: "Missing user ID" });
    }
    const notifications = await Notification.find({ user: userId }).sort({
      createdAt: -1,
    });

    if(!notifications){
      return res.status(400).json({message:"No Notifcation"})
    }
    res.status(200).json({ notifications });
  } catch (error) {
    res.status(500).json({ error: error.message });
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
    // console.log(friendRequest.id)
    await createNotification(receiverId, "friend_request", friendRequest.id); //use "_id" if "id" not works

    res.status(201).json({
      success: true,
      message: "Friend request sent",
      senderId
      // userid: user.id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const responseRequest = async (req, res) => {
  const userId = req.user.id;
  const { status } = req.body;

  const request = await FriendsRequest.findById(req.params.requestId);

  if (!request) {
    res.status(404).json({ message: "request not found" });
  }

  if (request.receiver.toString() !== userId) {
    return res.status(403).json({ message: "Not Authorized" });
  }

  if (request.status !== "pending") {
    return res.status(404).json({ Message: "Request already responded" });
  }

  request.status = status;
  await request.save();
  await createNotification(userId,"friend_request",request.id,status)
  res.json({
    message: `Friend request ${status}`,
  });
};

export const getRequest = async (req, res) => {
  try {
    const userId = req.user.id;

    const request = await FriendsRequest.find({
      receiver: userId,
      // status: "pending",
    }).populate("sender", "username email");

    res.json(request);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
