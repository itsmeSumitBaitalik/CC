import express from "express";
import {login,signup,forgetPassword} from "../controllers/auth.controller.js";

const route = express.Router();

route.post("/login",login);
route.post("/signup",signup);
route.post("/forget",forgetPassword);


const authRoute = route;
export default authRoute;