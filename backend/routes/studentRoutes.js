import express from "express";
import upload from "../upload.js";
import { StudentDocs } from "../controllers/stddoccontroller.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
export const studentRoutes = express.Router();
studentRoutes.post('/studentdocs',authenticateToken,upload.fields([{
    name: 'resume',
    maxCount: 1
}, {
    name: 'profilePic',
    maxCount: 1
}]),StudentDocs);