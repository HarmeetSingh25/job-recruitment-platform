import { Router } from "express";
import { getjobs } from "../controller/job.controller.js";
const router = Router();

router.get("/", getjobs);

export default router;
