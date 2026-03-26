import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  },

  otpHash: {
    type: String,
    required: true
  },

  type: {
    type: String,
    enum: ["forget", "2fa"],
    required: true
  },

  attempts: {
    type: Number,
    default: 0
  },

  isUsed: {
    type: Boolean,
    default: false
  },

  expiresAt: {
    type: Date,
    required: true
  }

}, {
  timestamps: true
});

// Automatically delete expired OTPs
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
otpSchema.index({ userId: 1, type: 1 }, { unique: true });

export default mongoose.model("Otp", otpSchema);