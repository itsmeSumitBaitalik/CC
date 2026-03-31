import express from "express";
import {
  login,
  signup,
  forgetPassword,
  logout,
} from "../controllers/auth.controller.js";
import {
  loginValidator,
  signupValidator,
} from "../middlewares/Validation.middleware.js";

const route = express.Router();

route.post("/login", loginValidator, login);
route.post("/signup", signupValidator,signup);
route.post("/logout", logout);
route.post("/forget", forgetPassword);

const authRoutes = route;
export default authRoutes;
