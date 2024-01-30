const express = require("express");
const router = express.Router();
const UserCtrl = require("../controllers/UserController");

router.post("/signup", UserCtrl.signup);
router.post("/login", UserCtrl.login);

module.exports = router;