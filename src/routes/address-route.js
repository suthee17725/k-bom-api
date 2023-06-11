const express = require("express");
const router = express.Router();

const addressController = require("../controllers/address-controller");
const authenticateMiddleware = require("../middlewares/authenticate");

// อัปเดตที่อยู่
router.put("/update", authenticateMiddleware, addressController.updateAddress);

module.exports = router;
