import { Router } from "express";
import { ScrambleController } from "../controllers/scrambleController";

const router = Router();
const scrambleController = new ScrambleController();

router.get("/get-scramble", scrambleController.getScramble);
router.get("/get-scrambles", scrambleController.getMultipleScrambles);

export default router;
