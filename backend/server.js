import "dotenv/config";

import express from "express";
import cors from "cors";
import http from "http";
import connectDB from "./src/config/db.js";
import authRoute from "./src/routes/auth.routes.js";
import auth  from "./src/middlewares/auth.middlewares.js";
import eventRoute from "./src/routes/events.routes.js";
import initSocket from "./src/socket/socket.js";
import notificationRoute from "./src/routes/notification.routes.js";
import userRoute from "./src/routes/user.routes.js";
import { settings } from "cluster";

// import chatRoute from "./src/routes/chat.routes.js";


connectDB()

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5001;

app.use(cors("*"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoute); //auth---> login,signup,forget

app.use("/api/dashboard/event", eventRoute); //events---> create,update,delete
app.use("/api/dashboard/notification", notificationRoute); //notification---> send notification, get notifications
// app.use('api/dashboard/community',communityRoute)

app.use('api/dashboard/user',auth,userRoute)
// app.use('api/dashboard/',auth,userRoute)

// app.use("/api/chat",authenticate,chatRoute);

initSocket(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
