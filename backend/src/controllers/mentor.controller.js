import Mentor from "../model/Mentors.js";

// ── GET /api/dashboard/mentors ─────────────────────
export const getAllMentors = async (req, res) => {
  try {
    const { search, category, skill, online } = req.query;
    const filter = {};

    if (search)   filter.name       = { $regex: search, $options: "i" };
    if (category) filter.categories = { $in: [category.toLowerCase()] };
    if (skill)    filter.skills     = { $in: [skill] };
    if (online === "true") filter["status.online"] = true;

    const mentors = await Mentor.find(filter)
      .populate("user", "username avatar")
      .sort({ "rating.average": -1 });

    // compute isMine for each mentor
    const result = mentors.map((m) => ({
      ...m.toObject(),
      isMine: m.user._id.toString() === req.user.id.toString(),
    }));

    res.json({ success: true, count: result.length, mentors: result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── GET /api/dashboard/mentors/:id ────────────────
export const getMentorById = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id)
      .populate("user", "username avatar email");

    if (!mentor) {
      return res.status(404).json({ success: false, message: "Mentor not found" });
    }

    res.json({
      success: true,
      mentor: {
        ...mentor.toObject(),
        isMine: mentor.user._id.toString() === req.user.id.toString(),
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── GET /api/dashboard/mentors/me ────────────────
export const getMyMentorProfile = async (req, res) => {
  try {
    const mentor = await Mentor.findOne({ user: req.user.id })
      .populate("user", "username avatar email");

    if (!mentor) {
      return res.status(404).json({ success: false, message: "Mentor profile not found" });
    }

    res.json({ success: true, mentor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── POST /api/dashboard/mentors/create ────────────
export const createMentorProfile = async (req, res) => {
  try {
    const existing = await Mentor.findOne({ user: req.user.id });
    if (existing) {
      return res.status(409).json({ success: false, message: "Mentor profile already exists" });
    }

    const {
      name, role, year, department,
      domain, skills, categories, bio, meta,
    } = req.body;

    if (!name || !role || !bio) {
      return res.status(400).json({ success: false, message: "Name, role and bio are required" });
    }
    if (req.user.role === "student") {
      return res.status(403).json({ success: false, message: "You are not authorized to create a mentor profile" });
    }

    const mentor = await Mentor.create({
      user: req.user.id,
      name, role, year, department,
      domain, skills, categories, bio, meta,
    });

    res.status(201).json({ success: true, message: "Mentor profile created", mentor });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── PUT /api/dashboard/mentors/update/:id ─────────
export const updateMentorProfile = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id);

    if (!mentor) {
      return res.status(404).json({ success: false, message: "Mentor not found" });
    }

    // only the owner or admin can update
    if (mentor.user.toString() !== req.user.id.toString()) {
      return res.status(403).json({ success: false, message: "Unauthorized" });
    }

    const {
      name, role, year, department,
      domain, skills, categories, bio, meta,
    } = req.body;

    const updated = await Mentor.findByIdAndUpdate(
      req.params.id,
      { name, role, year, department, domain, skills, categories, bio, meta },
      { new: true, runValidators: true }
    );

    res.json({ success: true, message: "Mentor profile updated", mentor: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── DELETE /api/dashboard/mentors/delete/:id ──────
export const deleteMentorProfile = async (req, res) => {
  try {
    const mentor = await Mentor.findByIdAndDelete(req.params.id);

    if (!mentor) {
      return res.status(404).json({ success: false, message: "Mentor not found" });
    }

    res.json({ success: true, message: "Mentor profile deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ── POST /api/dashboard/mentors/:id/rate ──────────
export const rateMentor = async (req, res) => {
  try {
    const { rating } = req.body;

    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ success: false, message: "Rating must be between 1 and 5" });
    }

    const mentor = await Mentor.findById(req.params.id);
    if (!mentor) {
      return res.status(404).json({ success: false, message: "Mentor not found" });
    }

    // can't rate yourself
    if (mentor.user.toString() === req.user.id.toString()) {
      return res.status(400).json({ success: false, message: "You cannot rate yourself" });
    }

    // recalculate average
    const newCount   = mentor.rating.count + 1;
    const newAverage = ((mentor.rating.average * mentor.rating.count) + rating) / newCount;

    mentor.rating.average = Math.round(newAverage * 10) / 10;
    mentor.rating.count   = newCount;
    await mentor.save();

    res.json({ success: true, message: "Rating submitted", rating: mentor.rating });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const requestMentor = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.id);
    if (!mentor) {
      return res.status(404).json({ success: false, message: "Mentor not found" });
    }

    // can't request yourself
    if (mentor.user.toString() === req.user.id.toString()) {
      return res.status(400).json({ success: false, message: "You cannot request yourself" });
    }

    // add request to mentor
    mentor.requests.push(req.user.id);
    await mentor.save();

    res.json({ success: true, message: "Request sent" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};