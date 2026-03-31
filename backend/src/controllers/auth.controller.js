import { sendEmail } from "../lib/mailGenrator.js";
import { generateToken } from "../lib/tokens.js";
import User from "../model/User.js";
import { createOtpForUser } from "../lib/storeOtp.js";
import bcrypt from "bcryptjs";

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const user = await User.findOne({ email });

    if (!user || !user.password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log("invalid password");
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = generateToken(user._id, user.email, `${user.fname} ${user.lname}`);

    res.cookie("token", token, {
      httpOnly: true,      // 🔒 prevents JS access
      secure: false,       // true in production (HTTPS)
      sameSite: "Lax",     // or "Strict"
      maxAge: 24 * 60 * 60 * 1000,
      path: "/",

    });

    return res.status(200).json({
      message: "Login successful",
      user,
    });
  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const signup = async (req, res) => {
  const { fname, lname, email, password, terms } = req.body;
  
  try {
    if (!fname || !lname || !email || !password || terms === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      fname,
      lname,
      email,
      password: hashedPassword,
      terms,
    });

    const token = generateToken(user._id, user.email, `${user.fname} ${user.lname}`);

    res.cookie("token", token, {
      httpOnly: true,      // 🔒 prevents JS access
      secure: false,       // true in production (HTTPS)
      sameSite: "Lax",     // or "Strict"
      maxAge: 24 * 60 * 60 * 1000,
      path: "/",

    });

    return res.status(201).json({ message: "user created successfully", user });
  } catch (error) {
    console.error("SIGNUP ERROR FULL:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const forgetPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      // console.log("User found for email:", email);
      // Generate reset token and send email logic here
      const otp = await createOtpForUser(user._id, "forget");

      await sendEmail(user.email, "Password Reset OTP", `Your OTP is: ${otp}`);

      res.json({ message: "OTP sent successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("FORGET ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "Lax",
      secure: false, // true in production
      path: "/",
    });

    return res.status(200).json({
      message: "Logout successful",
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};