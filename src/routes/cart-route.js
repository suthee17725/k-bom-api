const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cart-controller");

router.post("/add-to-cart", cartController.addToCart); //ใช้สำหรับเพิ่มสินค้าในตะกร้าสินค้า;
router.get("/cart-items", cartController.getCartItems); // แสดงรายการสินค้าในตะกร้าสินค้า
router.delete("/remove-from-cart/:cartItemId", cartController.removeFromCart); // ลบรายการสินค้าออกจากตะกร้าสินค้า
router.delete("/clear-cart", cartController.clearCart); // ลบตะกร้าสินค้าทั้งหมด

module.exports = router;
