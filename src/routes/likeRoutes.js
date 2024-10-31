import express from "express";
import {
  getLike,
  removeLike,
  getLikeByResId,
  getLikeByUserId,
} from "../controllers/likeControllers.js";

const likeRoutes = express.Router();

likeRoutes.post("/liked", getLike);

likeRoutes.delete("/unlike", removeLike);

likeRoutes.get("/get-like-by-res/:resId", getLikeByResId);

likeRoutes.get("/get-like-by-user/:userId", getLikeByUserId);

export default likeRoutes;
