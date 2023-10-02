import express from "express";
import { addUser, getUser } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.get("/info", getUser);

userRoutes.post("/addUser", addUser);
export default userRoutes;
