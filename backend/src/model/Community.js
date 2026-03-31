import mongoose from "mongoose";

const communitySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Community name is required"],
      trim: true,
      maxlength: 100,
      unique: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: 500,
    },

    category: {
      type: String,
      enum: ["tech", "design", "sports", "music", "gaming", "finance", "research", "other"],
      required: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    coverImage: {
      type: String,
      default: "",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

// virtual for member count
communitySchema.virtual("memberCount").get(function () {
  return this.members.length;
});

communitySchema.set("toJSON", { virtuals: true });
communitySchema.set("toObject", { virtuals: true });

export default mongoose.model("Community", communitySchema);