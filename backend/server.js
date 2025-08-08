import express from "express";
import dotenv from "dotenv";
// import connectDB from "./config/connectjs";
import connectDB from "./config/connect.js";
import cors from "cors";
import cookies from "cookie-parser";
import { authRoutes } from "./routes/authRoutes.js";
import { studentRoutes } from "./routes/studentRoutes.js";
dotenv.config();       
connectDB();            

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(cookies());
app.use('/uploads',studentRoutes)
app.use('/auth',authRoutes);
app.use('/student', studentRoutes);

// Sample route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
