import { verifyToken } from '../lib/tokens.js';
import User from '../model/User.js';

// ── Basic auth — verify cookie token ──────────────
function auth(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Token required' });
  }

  try {
    const decoded = verifyToken(token);
    req.user = decoded; // { id, email, username }
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, message: 'Token expired' });
    }
    return res.status(403).json({ success: false, message: 'Invalid token' });
  }
}

// ── Role check — fetch user from DB then check role ─
export const restrictTo = (...roles) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id).select('role');

      if (!user) {
        return res.status(401).json({ success: false, message: 'User not found' });
      }

      // ✅ Admin bypasses all role restrictions
      if (user.role === 'Admin') {
        return next();
      }

      // ✅ Check if user's role is in allowed roles
      if (!roles.includes(user.role)) {
        return res.status(403).json({
          success: false,
          message: `Access restricted to: ${roles.join(', ')}`,
        });
      }

      next();
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
};

// ── Admin only ─────────────────────────────────────
export const adminOnly = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select('role');

    if (!user) {
      return res.status(401).json({ success: false, message: 'User not found' });
    }

    if (user.role !== 'Admin') {
      return res.status(403).json({ success: false, message: 'Admin access only' });
    }

    next();
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

export default auth;  