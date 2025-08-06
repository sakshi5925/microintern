import express from "express";
import dotenv from "dotenv";
// import connectDB from "./config/connectjs";
import connectDB from "./config/connect.js";
dotenv.config();       
connectDB();            

const app = express();
app.use(express.json());

// Sample route
app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
