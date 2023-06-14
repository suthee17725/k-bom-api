const express = require("express");
const router = express.Router();

const additemAbortController = require("../controllers/additem-controller");

router.post("/purchase", additemAbortController.purchaseProduct); //คำสั่งกดซื้อสินค้า

module.exports = router;
