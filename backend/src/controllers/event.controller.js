import Event from "../model/Events.js";
import EventRegistration from "../model/EventRegistration.js";

// ── GET /api/dashboard/events ──────────────────────
export const getAllEvents = async (req, res) => {
  try {
    const { type, status, search } = req.query;
    const filter = {};

    if (type) filter.eventType = type;
    if (status) filter.status = status;
    if (search) filter.title = { $regex: search, $options: "i" };

    const events = await Event.find(filter)
      .sort({ date: 1 })
      .populate("createdBy", "username avatar")
      .lean();

    const eventsWithSeats = await Promise.all(
      events.map(async (event) => {
        const count = await EventRegistration.countDocuments({
          event: event._id,
        });

        return {
          ...event,
          registeredCount: count,
          availableSeats:
            event.totalSeats === 0
              ? "Unlimited"
              : event.totalSeats - count,
        };
      })
    );

    res.json({
      success: true,
      count: eventsWithSeats.length,
      events: eventsWithSeats,
    });

    res.json({ success: true, count: events.length, events });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── GET /api/dashboard/events/:id ─────────────────
export const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id)
      .populate("createdBy", "username avatar");

    if (!event) {
      return res.status(404).json({ success: false, message: "Event not found" });
    }

    res.json({ success: true, event });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── POST /api/dashboard/events/create ─────────────
export const createEvent = async (req, res) => {
  const {
    title,
    description,
    date,
    location,
    registrationLink,
    campusName,
    eventType,
    time
  } = req.body;

  try {
    if (!title || !description || !date || !location || !registrationLink || !campusName || !eventType || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const event = await Event.create({
      title,
      description,
      date,
      location,
      registrationLink,
      campusName,
      eventType,
      time,
      createdBy: req.user.id,
    });

    res.status(201).json({ message: "Event created successfully", event });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ── PUT /api/dashboard/events/update/:id ──────────
export const updateEvent = async (req, res) => {
  const {
    title,
    description,
    date,
    location,
    registrationLink,
    campusName,
    eventType,
  } = req.body;

  try {
    const existingEvent = await Event.findById(req.params.id);

    if (!existingEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    // allow admin to update any event
    const user = req.user;
    if (existingEvent.createdBy.toString() !== user.id.toString() && !user.isAdmin) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { title, description, date, location, registrationLink, campusName, eventType },
      { new: true }
    );

    res.status(200).json({ message: "Event updated successfully", updatedEvent });
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ── DELETE /api/dashboard/events/delete/:id ───────
export const deleteEvent = async (req, res) => {
  try {
    const existingEvent = await Event.findById(req.params.id);

    if (!existingEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    if (existingEvent.createdBy.toString() !== req.user.id.toString()) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    await Event.findByIdAndDelete(req.params.id);

    // remove all registrations for this event too
    await EventRegistration.deleteMany({ event: req.params.id });

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// ── POST /api/dashboard/events/:id/register ───────
export const registerForEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const userId = req.user.id;

    // 1. Check event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
      });
    }

    // 2. Check capacity using totalSeats
    const count = await EventRegistration.countDocuments({ event: eventId });

    if (event.totalSeats && count >= event.totalSeats) {
      return res.status(400).json({
        success: false,
        message: "Event is full",
      });
    }

    // 3. Create registration
    await EventRegistration.create({
      event: eventId,
      user: userId,
    });

    return res.status(201).json({
      success: true,
      message: "Registered successfully",
    });

  } catch (error) {
    // Handle duplicate registration
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        message: "Already registered",
      });
    }

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// ── DELETE /api/dashboard/events/:id/register ─────
export const cancelRegistration = async (req, res) => {
  try {
    const registration = await EventRegistration.findOneAndDelete({
      event: req.params.id,
      user: req.user.id,
    });

    if (!registration) {
      return res.status(404).json({ success: false, message: "Registration not found" });
    }

    res.json({ success: true, message: "Registration cancelled" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};