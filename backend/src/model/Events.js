import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Event title is required"],
      trim: true,
      maxlength: 150,
    },

    description: {
      type: String,
      required: [true, "Event description is required"],
      trim: true,
      maxlength: 2000,
    },

    date: {
      type: Date,
      required: [true, "Event date is required"],
    },

    time: {
      type: String,
      required: [true, "Event time is required"],
      trim: true,
    },

    location: {
      type: String,
      required: [true, "Event location is required"],
      trim: true,
      maxlength: 200,
    },

    registrationLink: {
      type: String,
      required: true,
    },

    campusName: {
      type: String,
      required: [true, "Campus name is required"],
      trim: true,
      maxlength: 150,
    },

    eventType: {
      type: String,
      required: [true, "Event type is required"],
      enum: [
        "Workshop",
        "Seminar",
        "Hackathon",
        "Conference",
        "Webinar",
        "Cultural",
        "Sports",
        "Other",
      ],
    },
    status: {
      type: String,
      enum: ["upcoming", "ongoing", "completed"],
      default: "upcoming",
    },
    totalSeats: {
      type: Number,
      default: 0, // 0 for unlimited or as specified
    },
  },
  {
    timestamps: true,
  },
);

const Event = mongoose.model("Event", eventSchema);

export default Event;
