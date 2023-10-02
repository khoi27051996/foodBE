import express from "express";
import {
  addRateRes,
  getListRateByRes,
  getListRateByUser,
} from "../controllers/rateResController.js";

const rateRes = express.Router();



//Lấy danh sách đánh giá theo nhà hàng
rateRes.get("/get-rate-by-res/:resId", getListRateByRes);
// Lấy danh sách đánh giá theo người dùng
rateRes.get("/get-rate-by-user/:userId", getListRateByUser);

// Thêm đánh giá nhà hàng:
rateRes.post("/add-res", addRateRes)
export default rateRes;
