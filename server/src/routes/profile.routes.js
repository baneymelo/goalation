const { Router } = require("express");
const verifyToken = require("../middlewares/verifyToken");
const { getProfile, editProfile } = require("../controllers/profile.controller");
const router = Router();

router.get('/', verifyToken, getProfile)
router.post('/', verifyToken, editProfile)

module.exports = router;