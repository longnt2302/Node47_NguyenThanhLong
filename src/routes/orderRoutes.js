import express from "express";
import { addOrder } from "../controllers/orderControllers.js";

const orderRoutes = express.Router();

orderRoutes.post("/add-order", addOrder);

export default orderRoutes;
