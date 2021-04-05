import { Router } from "express";
import verifyToken from "../middlewares/verifyToken";
import * as goalsCtrl from "../controllers/goals.controller";
const router = Router();

router.get('/', verifyToken, goalsCtrl.getGoals)
router.post('/', verifyToken, goalsCtrl.createGoal)
router.put('/:goalId', verifyToken, goalsCtrl.editGoal)

export default router;