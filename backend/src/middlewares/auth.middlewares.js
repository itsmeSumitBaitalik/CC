import { verifyToken } from "../lib/tokens.js";


function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  // console.log("authHeader", authHeader);

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token required" });
  }

  const token = authHeader.split(" ")[1];

  // console.log("token", token);

  try {
    const decoded = verifyToken(token);

    req.user = decoded;
    next();

  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }

    return res.status(403).json({ message: "Invalid token" });
  }
}

export default auth;