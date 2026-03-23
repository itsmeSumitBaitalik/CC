import express from "express";
import {login,signup,forgetPassword,usersProfile} from "../controllers/auth.controller.js";
import {authenticate} from '../middlewares/auth.middlewares.js';


const route = express.Router();

route.post("/login",login);
route.post("/signup",signup);
route.post("/forget",forgetPassword);

// profile route
route.patch("/profile",authenticate,usersProfile);

const userRoute = route;
export default userRoute;