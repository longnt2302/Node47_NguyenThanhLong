import express from "express";
import { signUp, login, loginFacebook, forgotPassword } from "../controllers/authControllers.js";

const authRoutes = express.Router();

// define API Register (sign-up)
authRoutes.post("/sign-up", signUp);

// define API Login
authRoutes.post("/login", login);

// define API login facebook
authRoutes.post("/login-facebook", loginFacebook);

// B1: define API forgot-password
authRoutes.post("/forgot-password", forgotPassword);

export default authRoutes;
