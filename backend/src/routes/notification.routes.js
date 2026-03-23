import express from "express";
import { sendFriendRequest,getNotifications,responseRequest,getRequest } from "../controllers/notification.controller.js";

const notificationRoute = express.Router();

notificationRoute.post("/sendFriendRequest/:receiverId",sendFriendRequest);
notificationRoute.get("/getNotifications/:id", getNotifications);
notificationRoute.get("/allRequest/:id",getRequest);
notificationRoute.patch("/responseRequest/:requestId",responseRequest); //accept or reject friend 

export default notificationRoute;