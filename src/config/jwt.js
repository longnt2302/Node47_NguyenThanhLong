import dotenv from "dotenv";
import jwt from "jsonwebtoken";

// load file .env
dotenv.config();

const createToken = (payload) => {
  return jwt.sign({ payload: payload }, process.env.SECRET_KEY, {
    algorithm: "HS256", // HS256 thuật toán mã hoá với khoá đối xứng
    expiresIn: "30m", // m: minute, s: second, h: hour, d: day
  });
};

// define function để verify token
const verifyToken = (token) => {
  try {
    jwt.verify(token, process.env.SECRET_KEY);
    return true;
  } catch (error) {
    return false;
  }
};

// define middleware để check token
const middlewareToken = (req, res, next) => {
  let { token } = req.headers;
  if (!token) return res.status(401).json({ message: "Unauthorized" });
  let checkToken = verifyToken(token);
  if (checkToken) {
    next(); // pass check token
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export { createToken, middlewareToken };
