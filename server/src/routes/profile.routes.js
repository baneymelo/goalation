import { Router } from "express";
import verifyToken from "../middlewares/verifyToken";
import * as profileCtrl from "../controllers/profile.controller";
const router = Router();

router.get('/', verifyToken, profileCtrl.getProfile)
router.post('/', verifyToken, profileCtrl.editProfile)

export default router;