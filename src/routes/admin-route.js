const express = require("express");

const adminController = require("../controllers/admin-controller");

const router = express.Router();

router.get("/products", adminController.getAllProduct);
router.post("/products", adminController.createProduct);
router.patch("/update-products", adminController.updateProductById);
router.delete("/delete-products/:id", adminController.deleteProduct);
router.get("/products/:id", adminController.getProductById);

module.exports = router;
