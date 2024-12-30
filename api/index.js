import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.routes.js";

dotenv.config();

const app = express();

connectDB();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.use('/api/user',userRouter)