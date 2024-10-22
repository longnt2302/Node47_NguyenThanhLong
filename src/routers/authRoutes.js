import express from "express";
import { signUp, login, loginFacebook, forgotPassword, changePassword } from "../controllers/authControllers.js";

const authRoutes = express.Router();

// define API Register (sign-up)
authRoutes.post("/sign-up", signUp);

// define API Login
authRoutes.post("/login", login);

// define API login facebook
authRoutes.post("/login-facebook", loginFacebook);

// B1: define API forgot-pass
authRoutes.post("/forgot-pass", forgotPassword);

// B2: define API change password
authRoutes.post("/change-pass", changePassword);

export default authRoutes;
