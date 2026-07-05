import { Router } from "express";
import { getAllJobs } from "../controller/job.controller.js";
const router = Router();

router.get("/", getAllJobs);

export default router;
