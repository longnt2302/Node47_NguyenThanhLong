import express from "express";
import {
  createUser,
  getUserDb,
  getUsers,
  getUserOrm,
  getUserOrmById,
  createUserOrm,
} from "../controllers/userControllers.js";
import { middlewareToken } from "../config/jwt.js";

// define object user routes ( Khởi tạo 1 userRoutes )
const userRoutes = express.Router();

// define API get list users
userRoutes.get("/get-users", getUsers);

userRoutes.post("/create-user", createUser);

userRoutes.get("/get-user-db", getUserDb);

// sử dụng ORM để get data
userRoutes.get("/get-users-orm", getUserOrm);

userRoutes.get("/get-users-orm/:id", getUserOrmById);

userRoutes.post("/create-users-orm", middlewareToken, createUserOrm);

export default userRoutes;
