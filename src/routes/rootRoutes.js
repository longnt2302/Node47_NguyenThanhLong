import express from "express";
import likeRoutes from "./likeRoutes.js";

const rootRoutes = express.Router();

rootRoutes.use("/like", likeRoutes);

export default rootRoutes;
