import express from "express";
import { createEvent,updateEvent,deleteEvent } from "../controllers/event.controller.js";

const eventRoute = express.Router();

eventRoute.post("/create", createEvent);
eventRoute.post("/update/:id", updateEvent);
eventRoute.post("/delete/:id", deleteEvent);


const eventsRoute = eventRoute;
export default eventsRoute;