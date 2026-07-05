import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import jobRoutes from "./routes/job.routes.js";
import { importJobs } from "./scripts/importJobs.js";

const app = express();
app.use(cors());
dotenv.config();
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/jobs", jobRoutes);

// console.log(cleanHtml("<h1>Hello</h1><script>alert(1)</script>"));
// console.log(parseDate("2026-04-20"));
// console.log(parseDate("32/13/2026"));
// console.log(jobs);
importJobs();
export default app;
