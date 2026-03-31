import express from "express";
import {
  getAllMentors,
  getMentorById,
  createMentorProfile,
  updateMentorProfile,
  deleteMentorProfile,
  rateMentor,
} from "../controllers/mentor.controller.js";
import { restrictTo, adminOnly } from "../middlewares/auth.middlewares.js";

const mentorRoute = express.Router();

// ── Read (any logged in user) ──────────────────────
mentorRoute.get("/",     getAllMentors);
mentorRoute.get("/:id",  getMentorById);

// ── Create profile (mentor role only) ─────────────
mentorRoute.post("/create",        restrictTo("mentor"), createMentorProfile);
mentorRoute.put("/update/:id",     restrictTo("mentor"), updateMentorProfile);
mentorRoute.delete("/delete/:id",  adminOnly,            deleteMentorProfile);

// ── Rate a mentor (any logged in user) ────────────
mentorRoute.post("/:id/rate", rateMentor);

export default mentorRoute;