import express from "express";
import userRoutes from "./userRoutes.js";
import videoRoutes from "./videoRoutes.js";
import authRoutes from "./authRoutes.js";

// define object rootRoutes ( Khởi tạo root routes )
const rootRoutes = express.Router();

// import userRoutes vào rootRoutes
rootRoutes.use("/user", userRoutes);

// import videoRoutes vào rootRoutes
rootRoutes.use("/video", videoRoutes);

rootRoutes.use("/auth", authRoutes);

export default rootRoutes;
