import { Router } from "express";

import {
  getDuplicates,
  updateDuplicate,
} from "../controller/duplicateJob.controller.js";

const duplicateRouter = Router();

duplicateRouter.get("/", getDuplicates);

duplicateRouter.patch("/:id", updateDuplicate);

export default duplicateRouter;