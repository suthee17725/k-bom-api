const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrderDetails,
  cancelOrder,
} = require("../controllers/order-controller");

router.post("/", createOrder); //สร้างออเดอร์ใหม่
router.get("/:orderId", getOrderDetails); // รายละเอียดออเดอร์
router.delete("/:orderId", cancelOrder); //ยกเลิกออเดอร์

module.exports = router;
