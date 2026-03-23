import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },

    email: {
      type: String,
      unique: true,
    },

    password: {
      type: String,
    },

    pic: {
      type: String,
    },

    bio: {
      type: String,
    },

    department: {
      type: String,
    },

    year: {
      type: Number,
    },

    skills: {
      type: [String],
      default: [],
    },

    interest: {
      type: [String],
      default: [],
    },

    socialMediaLink: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User

// modelName = "User"