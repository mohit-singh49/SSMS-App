const express = require('express');
const billsController = require("../controllers/transaction.controller");
const router = express.Router();

router.post("/order-history",billsController.ordhis);
router.get("/order/:id",billsController.orderenq);

module.exports = router;