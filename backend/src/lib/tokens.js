import jwt from "jsonwebtoken";


// Generate JWT
export function generateToken(id, email, username){
  return jwt.sign(
    {
      id: id,
      email: email,
      username:username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES || "15m",
      issuer: "my-api",
    },
  );
}
export function verifyToken(token) {
  return jwt.verify(token, process.env.JWT_SECRET, {
    issuer: "my-api",
  });
}
