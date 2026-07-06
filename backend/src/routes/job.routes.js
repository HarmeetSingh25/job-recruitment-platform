import { Router } from "express";
import { getJobById, getjobs } from "../controller/job.controller.js";
const router = Router();

router.get("/", getjobs);
router.get("/:id", getJobById);
export default router;
