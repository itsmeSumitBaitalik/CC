import express from "express";
import { usersProfile,updateProfile,deleteProfile } from "../controllers/user.controller.js";

const userRoute = express.Router();

userRoute.get("/me/:id", usersProfile);
userRoute.put("/update/:id", updateProfile);
userRoute.delete("/delete/:id", deleteProfile);

export default userRoute;