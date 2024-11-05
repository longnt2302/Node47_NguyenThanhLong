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
import { upload } from "../config/upload.js";
import { uploadCloud } from "../config/upload.cloud.js";

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

userRoutes.post("/upload-avatar", upload.single("hinhAnh"), (req, res) => {
  let file = req.file;
  return res.status(200).json(file);
});

userRoutes.post("/upload-multiple-avatar", upload.array("hinhAnhs"), (req, res) => {
  let files = req.files;
  return res.status(200).json(files);
});

userRoutes.post("/upload-cloud-avatar", uploadCloud.single("hinhAnh"), async (req, res) => {
  let file = req.file;
  return res.status(200).json(file);
});

userRoutes.post("/upload-multiple-cloud", uploadCloud.array("hinhAnhs"), async (req, res) => {
  let files = req.files;
  return res.status(200).json(files);
});

export default userRoutes;
