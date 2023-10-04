import express from "express";
import {
  getLike,
  getListLikeByRes,
  getListLikeByUser,
  likeOrDislike,
} from "../controllers/likeResController.js";

const likeResRoutes = express.Router();
// Lấy danh sách like nhà hàng
likeResRoutes.get("/get-like", getLike);
// Theo nhà hàng
likeResRoutes.get("/get-like-by-res/:resId", getListLikeByRes);
//Theo người dùng
likeResRoutes.get("/get-like-by-user/:userId", getListLikeByUser);
// Like và unlike
likeResRoutes.post("/likeOrDislike", likeOrDislike);
export { likeResRoutes };
