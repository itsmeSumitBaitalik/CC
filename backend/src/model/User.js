import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // 🔴 Required for signup
    username: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    terms: {
      type: Boolean,
      required: true,
    },
    role: {
      type: String,
      enum: ["Student", "Guide", "Admin"],
      default: "Student",
    },
    // 🟡 Optional (Step 2 / onboarding)
    college: {
      type: String,
      default: "",
    },

    department: {
      type: String,
      default: "",
    },

    year: {
      type: String,
      default: "",
    },

    enrollment_no: {
      type: String,
      default: "",
    },

    // 🟢 Profile fields
    bio: {
      type: String,
      default: "",
    },

    pic: {
      type: String,
      default: "",
    },

    interests: {
      type: [String],
      default: [],
    },

    skills: {
      type: [String],
      default: [],
    },

    // 🔥 Profile completion tracking
    isProfileComplete: {
      type: Boolean,
      default: false,
    },

    // 🤝 Social connection tracking
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    participatedEvents: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "EventRegistration",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// 🔥 Convert interests string → array automatically
userSchema.pre("save", function () {
  if (typeof this.interests === "string") {
    this.interests = this.interests
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);
  }
});


const User = mongoose.model("User", userSchema);
export default User;