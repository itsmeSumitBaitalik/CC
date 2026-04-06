import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    type: {
      type: String,
      enum: ["friend_request", "message", "like"],
      required: true,
    },
    referenceId: { type: mongoose.Schema.Types.ObjectId, ref: "FriendsRequest" }, // friendRequestId
    message: {
      type: String,
    },
    isRead: { type: Boolean, default: false },
    
  },
  { timestamps: true },
);

// Optimize unread queries
notificationSchema.index({ user: 1, isRead: 1 });

const Notification = mongoose.model("Notification", notificationSchema);
export default Notification;
