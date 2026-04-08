import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    // ── Sender ────────────────────────────────────
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // ── One-to-one DM ─────────────────────────────
    receiver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    // ── Group chat (community) ────────────────────
    community: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Community",
      default: null,
    },

    // ── Message content ───────────────────────────
    content: {
      type: String,
      required: [true, "Message content is required"],
      trim: true,
      maxlength: 2000,
    },

    // ── Type ──────────────────────────────────────
    type: {
      type: String,
      enum: ["dm", "group"],
      required: true,
    },

    // ── Read receipts (DM only) ───────────────────
    isRead: {
      type: Boolean,
      default: false,
    },

    readAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

// ── Indexes for fast queries ───────────────────────
// fetch DM conversation between two users
messageSchema.index({ sender: 1, receiver: 1, createdAt: -1 });
// fetch group chat messages
messageSchema.index({ community: 1, createdAt: -1 });
// unread DM count
messageSchema.index({ receiver: 1, isRead: 1 });

// ── Validate: must have either receiver or community ─
messageSchema.pre("save", function (next) {
  if (!this.receiver && !this.community) {
    return next(new Error("Message must have either a receiver or a community"));
  }
  if (this.receiver && this.community) {
    return next(new Error("Message cannot have both receiver and community"));
  }
  next();
});

export default mongoose.model("Message", messageSchema);