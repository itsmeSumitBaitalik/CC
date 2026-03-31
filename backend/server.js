import 'dotenv/config';
import express from 'express';
import http from 'http';
// import { Server } from 'socket.io';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import connectDB from './src/config/db.js';
 
import auth from './src/middlewares/auth.middlewares.js';

// 👇 import socket initializer
import initSocket from '../backend/src/socket/socket.js';

// ── Route imports ──────────────────────────────────
import authRoutes from './src/routes/auth.routes.js';
import userRoutes from './src/routes/user.routes.js';
import eventRoutes from './src/routes/events.routes.js';
import notificationRoute from './src/routes/notification.routes.js';
import mentorRoutes from './src/routes/mentor.routes.js';
import communityRoutes from './src/routes/community.routes.js';
// import chatRoutes      from './src/routes/chat.route.js';
// import xpRoutes        from './src/routes/xp.routes.js';

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// ── Socket.IO ──────────────────────────────────────
// const io = new Server(server, {
//   cors: { origin: process.env.CLIENT_URL || '*', credentials: true },
//   pingTimeout: 60000,
// });
 initSocket(server);

// ── Middleware ─────────────────────────────────────
app.use(helmet());
app.use(morgan('dev'));
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,                  // required for cookies
}));
app.use(cookieParser());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ── Health check ───────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', project: 'CampusConnect' });
});

// ── Public routes ──────────────────────────────────
app.use('/api/auth', authRoutes);

// ── Protected routes (auth applied at router level) ──
app.use('/api/dashboard/events', auth, eventRoutes);
app.use('/api/dashboard/users', auth, userRoutes);
app.use('/api/dashboard/notifications', auth, notificationRoute);
app.use('/api/dashboard/mentors', auth, mentorRoutes);
app.use('/api/dashboard/communities', auth, communityRoutes);
// app.use('/api/dashboard/chat',         auth, chatRoutes);
// app.use('/api/dashboard/xp',           auth, xpRoutes);

// ── 404 ────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// ── Global error handler ───────────────────────────
app.use((err, _req, res, _next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal server error',
  });
});

// ── Start ──────────────────────────────────────────
connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`🚀 CampusConnect running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('❌ MongoDB connection failed:', err.message);
  process.exit(1);
});