import express from "express";
import userRoutes from "./userRoutes.js";

// define object rootRoutes ( Khởi tạo root routes )
const rootRoutes = express.Router();

// import userRoutes vào rootRoutes
rootRoutes.use("/user", userRoutes);

export default rootRoutes;
