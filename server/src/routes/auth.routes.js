const { Router } = require("express");
const { session, signIn, signUp } = require("../controllers/auth.controllers");
const checkDuplicate = require("../middlewares/checkDuplicate");
const router = Router();

router.get('/session', session)
router.post('/signup', checkDuplicate, signUp)
router.post('/signin', signIn)

module.exports = router;