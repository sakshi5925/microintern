import express from "express";
import { Register } from "../controllers/authcontroller.js";
import { Login } from "../controllers/authcontroller.js";

export  const authRoutes = express.Router();

authRoutes.post('/signup', Register);
authRoutes.post('/signin', Login); 
