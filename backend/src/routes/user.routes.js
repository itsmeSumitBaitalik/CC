import express from "express";
import { usersProfile,updateProfile,deleteProfile, updateUserRole } from "../controllers/user.controller.js";
import { adminOnly } from "../middlewares/auth.middlewares.js";

const userRoute = express.Router();

userRoute.get("/me/", usersProfile);
userRoute.put("/update/:id", updateProfile);
userRoute.delete("/delete/:id", adminOnly, deleteProfile);
userRoute.patch("/role/:id", adminOnly, updateUserRole);

export default userRoute;