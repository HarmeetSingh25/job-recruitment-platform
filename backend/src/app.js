import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import jobRoutes from "./routes/job.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";
import duplicateRouter from "./routes/duplicateJob.routes.js";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: (origin, callback) => {
      if (
        !origin ||
        origin === "http://localhost:5173" ||
        origin.endsWith(".vercel.app")
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use("/api/jobs", jobRoutes);
app.use("/api/dashboard", dashboardRouter);
app.use("/api/duplicates", duplicateRouter);

export default app;
