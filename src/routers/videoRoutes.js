import express from "express";
import { getVideos, getTypes, getVideosByTypeId, getVideoById } from "../controllers/videoControllers.js";
import { middlewareToken } from "../config/jwt.js";

const videoRoutes = express.Router();

// define API get list video
videoRoutes.get("/get-videos", getVideos);

// define API get type video
videoRoutes.get("/get-types", middlewareToken, getTypes); // apply authentication => xử lý middleware token

// define API get list video by video type
videoRoutes.get("/get-videos/:typeId", getVideosByTypeId);

// define API get video detail
videoRoutes.get("/get-video/:videoId", getVideoById);

export default videoRoutes;
