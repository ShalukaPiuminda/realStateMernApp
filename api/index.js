import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || " Internal Server error";
  return res.status(statusCode).json({
    success:false,
    statusCode,
    message,
  })
});
