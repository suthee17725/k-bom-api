const express = require("express");
const router = express.Router();

const productController = require("../controllers/product-controller");

router.get("/productsAll", productController.getAllProducts); // ดูรายการสินค้าทั้งหมด
<<<<<<< HEAD
router.get("/detail/:productId", productController.getProductDetails); // ดูรายละเอียดของสินค้า
router.post("/add", productController.createProduct); // สร้างสินค้าใหม่
router.put("/edit/:productId", productController.updateProduct); // แก้ไขข้อมูลสินค้า
router.delete("/delete/:productId", productController.deleteProduct); // ลบสินค้า
=======
router.get("/products/:productId", productController.getProductDetails); // ดูรายละเอียดของสินค้า
router.post("/newproducts", productController.createProduct); // สร้างสินค้าใหม่
router.put("/products/:productId", productController.updateProduct); // แก้ไขข้อมูลสินค้า
router.delete("/products/:productId", productController.deleteProduct); // ลบสินค้า
>>>>>>> a16c367f4c316427acf9a5f9f619777bfaa117ce

module.exports = router;
