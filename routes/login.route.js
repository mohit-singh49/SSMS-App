const express = require('express');
const loginController = require("../controllers/login.controller");
const router = express.Router();

router.post("/login-bitsid",loginController.bitsidlogin);
router.get("/logout",loginController.logout);

module.exports = router;