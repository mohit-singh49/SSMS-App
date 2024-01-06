const express = require('express');
const transactionController = require("../controllers/transaction.controller");
const router = express.Router();

router.post("/generate-qr",transactionController.generateqr);
router.get("/recordtransaction",transactionController.rectransac);

module.exports = router;