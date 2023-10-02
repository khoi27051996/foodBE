import express from "express";
import { addOders, getFoodByOder } from "../controllers/odersController.js";
const odersRoutes = express.Router();

// Thêm oders:

odersRoutes.post("/add-oders", addOders);

// Lấy thông tin món oder (Luyện tập):

odersRoutes.get("/food-by-oder/:foodId", getFoodByOder);
export default odersRoutes;
