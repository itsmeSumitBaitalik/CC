import bcrypt from "bcryptjs";
import { generateOTP } from "./otpGenerator.js";
import Otp from "../db/model/otpSchema.js";

export async function createOtpForUser(userId, type) {
  const otp = generateOTP(6);

  const hashedOtp = await bcrypt.hash(otp, 10);

  const expiresAt = new Date(Date.now() + 2 * 60 * 1000); // 2 minutes from now

  await Otp.findOneAndUpdate(
    { userId, type }, // match existing OTP
    {
      $set: {
        otpHash: hashedOtp,
        expiresAt,
        attempts: 0,
        isUsed: false,
      },
    },
    {
      upsert: true,
      returnDocument: "after",
      setDefaultsOnInsert: true,
    },
  );

  return otp;
}
