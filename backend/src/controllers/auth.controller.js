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

    const token = generateToken(user.id, user.email, user.username);

    return res.status(200).json({
      message: "Login successful",
      token,
      user: user.id,
    });
  } catch (error) {
    // console.error("LOGIN ERROR:", error);
    return res.status(500).json({ message: error.message });
  }
};

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  console.log("Signup request received with data:", { username, email });
  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      res.status(400).json({ message: "User already exists" });
    }

    const salt = 10;
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = generateToken(user._id, user.email);

    res.status(201).json({ message: "user created successfully", user, token });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
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
    }
  } catch (error) {
    console.error("FORGET ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

//users profile
export const usersProfile = async (req, res) => {
  const { username, skills, interest } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { username, skills, interest },
      { returnDocument: "after", runValidators: true },
    ).select("-password");

    if (!user) {
      res.status(404).json({ message: "user not found" });
    }
    res.json({
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    // console.error("profile error:", error);
    res.status(500).json({ messsage: error.message });
  }
};
