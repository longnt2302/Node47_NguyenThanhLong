import express from "express";
import {
  addRate,
  getRateByRes,
  getRateByUser,
} from "../controllers/rateControllers.js";

const rateRoutes = express.Router();

rateRoutes.post("/add-rate", addRate);

rateRoutes.get("/get-rate-by-res/:resId", getRateByRes);

rateRoutes.get("/get-rate-by-user/:userId", getRateByUser);

export default rateRoutes;
