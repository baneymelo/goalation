import { Router } from "express";
import verifyToken from "../middlewares/verifyToken";
import * as goalsCtrl from "../controllers/goals.controller";
const router = Router();

router.get('/', verifyToken, goalsCtrl.getGoal)
router.post('/', verifyToken, goalsCtrl.createGoal)

export default router;