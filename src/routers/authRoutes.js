import express from "express";
import { signUp, login } from "../controllers/authControllers.js";

const authRoutes = express.Router();

// define API Register (sign-up)
authRoutes.post("/sign-up", signUp);

// define API Login
authRoutes.post("/login", login);

export default authRoutes;
