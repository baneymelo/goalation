import { Router } from "express";
import * as authCtrl from "../controllers/auth.controllers";
import checkDuplicate from "../middlewares/checkDuplicate";
const router = Router();

router.get('/session', authCtrl.session)
router.post('/signup', checkDuplicate, authCtrl.signUp)
router.post('/signin', authCtrl.signIn)

export default router;