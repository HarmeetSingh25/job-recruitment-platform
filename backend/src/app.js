import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import jobRoutes from "./routes/job.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";
import duplicateRouter from "./routes/duplicateJob.routes.js";

dotenv.config();

const app = express();
// app.use(
//   cors({
//     origin: ["http://localhost:5173","https://job-recruitment-platform-1auidkcwt-codes-h7s-projects.vercel.app/"],
//     credentials: true,
//   })
// )

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/jobs", jobRoutes);
app.use("/api/dashboard", dashboardRouter);
app.use("/api/duplicates", duplicateRouter);

export default app;
