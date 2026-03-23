import "dotenv/config";

import express from "express";
import cors from "cors";
import http from "http";
import { connectDB } from "./src/db/db.js";
import userRoute from "./src/routes/basic.routes.js";
import { authenticate } from "./src/middlewares/auth.middlewares.js";
import eventsRoute from "./src/routes/events.routes.js";
import initSocket from "./src/socket/socket.js";
import notificationRoute from "./src/routes/notification.routes.js";
// import chatRoute from "./src/routes/chat.routes.js";

connectDB();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5001;

app.use(cors("*"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", userRoute); //auth---> login,signup,forget

app.use("/api/event", authenticate, eventsRoute); //events---> create,update,delete
app.use("/api/notification", authenticate, notificationRoute); //notification---> send notification, get notifications
// app.use("/api/chat",authenticate,chatRoute);

initSocket(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
