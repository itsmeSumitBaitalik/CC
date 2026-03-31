import mongoose from "mongoose";

const mentorSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true, // one mentor profile per user
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    // display role on mentor card
    role: {
      type: String,
      enum: ["student", "alumni", "faculty"],
      required: true,
    },

    year: {
      type: Number, // only relevant for students
    },

    department: {
      type: String,
      trim: true,
    },

    domain: {
      type: String, // e.g. "UI/UX Design" for alumni
      trim: true,
    },

    skills: [
      {
        type: String,
        trim: true,
      },
    ],

    categories: [
      {
        type: String,
        lowercase: true,
        trim: true,
      },
    ],

    rating: {
      average: {
        type: Number,
        min: 0,
        max: 5,
        default: 0, // fixed — was required with no default
      },
      count: {
        type: Number,
        default: 0,
      },
    },

    bio: {
      type: String,
      required: true,
    },

    status: {
      online: {
        type: Boolean,
        default: false,
      },
    },

    meta: {
      themeColor: {
        type: String, // removed isMine — computed in controller
      },
    },

    engagement: {
      students: {
        type: Number,
        default: 0,
      },
      sessions: {
        type: Number,
        default: 0,
      },
      withYouMonths: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Mentor", mentorSchema);