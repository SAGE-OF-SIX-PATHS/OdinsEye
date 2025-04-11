
import { Router } from "express";
import { factCheck } from "../controllers/factCheck.controller";

const router = Router();

router.post("/", factCheck);

export default router;
