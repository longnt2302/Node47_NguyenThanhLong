import express from "express";
import likeRoutes from "./likeRoutes.js";
import rateRoutes from "./rateRoutes.js";
import orderRoutes from "./orderRoutes.js";

const rootRoutes = express.Router();

rootRoutes.use("/like", likeRoutes);

rootRoutes.use("/rate", rateRoutes);

rootRoutes.use("/order", orderRoutes);

export default rootRoutes;
