const express = require("express");
const router = express.Router();

const productController = require("../controllers/product-controller");

router.get("/productsAll", productController.getAllProducts); // ดูรายการสินค้าทั้งหมด
router.get("/detail/:productId", productController.getProductDetails); // ดูรายละเอียดของสินค้า
router.post("/add", productController.createProduct); // สร้างสินค้าใหม่
router.put("/edit/:productId", productController.updateProduct); // แก้ไขข้อมูลสินค้า
router.delete("/delete/:productId", productController.deleteProduct); // ลบสินค้า

module.exports = router;
