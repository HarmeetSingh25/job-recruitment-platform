import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import jobRoutes from "./routes/job.routes.js";

const app = express();
app.use(cors());
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/jobs", jobRoutes);

export default app;
