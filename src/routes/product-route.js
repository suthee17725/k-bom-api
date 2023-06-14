const express = require("express");
const router = express.Router();

const productController = require("../controllers/product-controller");

router.get("/products", productController.getAllProducts); // ดูรายการสินค้าทั้งหมด
router.get("/products/:productId", productController.getProductById); // ดูรายละเอียดของสินค้า
router.post("/products", productController.createProduct); // สร้างสินค้าใหม่
router.put("/products/:productId", productController.updateProduct); // แก้ไขข้อมูลสินค้า
router.delete("/products/:productId", productController.deleteProduct); // ลบสินค้า

module.exports = router;
