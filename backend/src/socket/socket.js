import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import cookie from "cookie";

let io;

export default function initSocket(server) {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL || "http://localhost:5173",
      credentials: true,
    },
    pingTimeout: 60000,
  });

  // 🔐 Socket Auth Middleware
  io.use((socket, next) => {
    try {
      const cookies = cookie.parse(socket.handshake.headers.cookie || "");
      // console.log(" Cookies:", cookies);
      const token = cookies.token;

      if (!token) {
        return next(new Error("Authentication error: Token missing"));
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      socket.user = decoded;

      next();
    } catch (error) {
      return next(new Error("Authentication error: Invalid token"));
    }
  });

 
  io.on("connection", (socket) => {
    console.log("🔥 User connected:", socket.user);


    

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.user?.id);
      socket.leave(userRoom);
    });
  });

  return io;
}