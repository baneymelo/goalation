const { Router } = require("express");
const verifyToken = require("../middlewares/verifyToken");
const { getGoals, createGoal, editGoal } = require("../controllers/goals.controller");
const router = Router();

router.get('/', verifyToken, getGoals)
router.post('/', verifyToken, createGoal)
router.put('/:goalId', verifyToken, editGoal)

module.exports = router;