import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import jobRoutes from "./routes/job.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";


const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
)
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/jobs", jobRoutes);
app.use("/api/dashboard", dashboardRouter);

export default app;
