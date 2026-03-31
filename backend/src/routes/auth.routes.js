import express from "express";
import {login,signup,forgetPassword, logout} from "../controllers/auth.controller.js";

const route = express.Router();

route.post("/login",login);
route.post("/signup",signup);
route.post("/logout",logout);
route.post("/forget",forgetPassword);


const authRoutes = route;
export default authRoutes;