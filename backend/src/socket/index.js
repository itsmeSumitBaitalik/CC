import { Server } from "socket.io";
import { verifyToken } from "../lib/tokens.js";
import User from "../model/User.js";
import registerAnonChat from "./anonChat.socket.js";
import registerDMChat from "./PrivateDm.socket.js";
import registerGroupChat from "./groupChat.socket.js";

let io;

const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: process.env.CLIENT_URL || "http://localhost:5173",
      credentials: true,
    },
    pingTimeout: 60000,
  });

  // ── Auth middleware ──────────────────────────────
  // Runs before every socket connection
  io.use(async (socket, next) => {
    try {
      // get token from cookie or handshake auth
      const token =
        socket.handshake.auth?.token ||
        socket.handshake.headers?.cookie
          ?.split("; ")
          ?.find((c) => c.startsWith("token="))
          ?.split("=")[1];

      if (!token) {
        return next(new Error("Authentication required"));
      }

      const decoded = verifyToken(token);

      // attach user info to socket
      socket.userId   = decoded.id;
      socket.email    = decoded.email;
      socket.username = decoded.username;

      // Fallback: If username is missing from token, fetch from DB
      if (!socket.username && socket.userId) {
        const user = await User.findById(socket.userId).select("username email");
        if (user) {
          socket.username = user.username;
          if (!socket.email) socket.email = user.email;
        }
      }

      next();
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        return next(new Error("Token expired"));
      }
      return next(new Error("Invalid token"));
    }
  });

  // ── Connection ───────────────────────────────────
  io.on("connection", (socket) => {
    console.log(`✅ Socket connected: ${socket.username} [${socket.id}]`);

    // register all chat handlers
    registerAnonChat(io, socket);
    registerDMChat(io, socket);
    registerGroupChat(io, socket);

    socket.on("disconnect", () => {
      console.log(`❌ Socket disconnected: ${socket.username} [${socket.id}]`);
    });
  });
  return io;
};

export { io };
export default initSocket;