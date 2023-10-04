import express from "express";
import { addUser, getUser, userLogin } from "../controllers/userController.js";
import { lockApi } from "../config/jwt.js";

const userRoutes = express.Router();

userRoutes.get("/info", lockApi, getUser);

userRoutes.post("/addUser", addUser);

userRoutes.post("/login", userLogin);

export default userRoutes;
