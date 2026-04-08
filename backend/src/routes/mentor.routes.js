import express from "express";
import {
  getAllMentors,
  getMentorById,
  createMentorProfile,
  updateMentorProfile,
  deleteMentorProfile,
  rateMentor,
  getMyMentorProfile,
  requestMentor,
} from "../controllers/mentor.controller.js";
import { restrictTo, adminOnly } from "../middlewares/auth.middlewares.js";

const mentorRoute = express.Router();

// ── Read (any logged in user) ──────────────────────
mentorRoute.get("/",     getAllMentors);
mentorRoute.get("/:id",  getMentorById);
mentorRoute.get("/me",  getMyMentorProfile);
// ── Create profile (mentor role only) ─────────────
mentorRoute.post("/create",        restrictTo("mentor"), createMentorProfile);
mentorRoute.put("/update/:id",     restrictTo("mentor"), updateMentorProfile);
mentorRoute.delete("/delete/:id",  adminOnly,            deleteMentorProfile);

// ── Rate a mentor (any logged in user) ────────────
mentorRoute.put("/:id/rate", rateMentor);
mentorRoute.put("/request/:id", requestMentor);

export default mentorRoute;