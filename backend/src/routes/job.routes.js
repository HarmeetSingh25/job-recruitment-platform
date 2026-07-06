import { Router } from "express";
import { getjobs, getSingleJob } from "../controller/job.controller.js";
const router = Router();

router.get("/", getjobs);
router.get("/:id", getSingleJob);
export default router;
