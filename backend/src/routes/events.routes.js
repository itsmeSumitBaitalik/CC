import express from "express";
import {
  createEvent,
  updateEvent,
  deleteEvent,
  getAllEvents,
  getEventById,
  registerForEvent,
  cancelRegistration,
} from "../controllers/event.controller.js";
import { restrictTo, adminOnly } from "../middlewares/auth.middlewares.js";

const eventRoute = express.Router();

// ── Read (any logged in user) ──────────────────────
eventRoute.get("/", getAllEvents);
eventRoute.get("/myevent/:id", getEventById);

// ── Write (mentor + admin only) ────────────────────
eventRoute.post("/create", restrictTo("mentor", "admin"), createEvent);
eventRoute.put("/update/:id", restrictTo("mentor", "admin"), updateEvent);
eventRoute.delete("/delete/:id", adminOnly, deleteEvent);

// ── Registration (any logged in user) ─────────────
eventRoute.post("/register/:id", registerForEvent);
eventRoute.delete("/unregister/:id", cancelRegistration);

export default eventRoute;