import express from "express";
import { createEvent,updateEvent,deleteEvent } from "../controllers/event.controller.js";

const eventRoute = express.Router();

eventRoute.post("/create", createEvent);
eventRoute.put("/update/:id", updateEvent);
eventRoute.delete("/delete/:id", deleteEvent);


// const eventsRoute = eventRoute;
export default eventRoute;