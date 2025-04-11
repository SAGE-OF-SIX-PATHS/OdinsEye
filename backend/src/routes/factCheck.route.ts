import { Router } from "express";
import { factCheck } from "../controllers/factCheck.controller";

const router = Router();

// POST /fact-check
router.post("/", factCheck);

export default router;
