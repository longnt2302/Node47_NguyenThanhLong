import express from "express";
import { getLike } from "../controllers/likeControllers.js";

const likeRoutes = express.Router();

likeRoutes.post("/get-like", getLike);

export default likeRoutes;
