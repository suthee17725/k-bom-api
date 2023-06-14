const { request } = require("express");
const { Product } = require("../models");

// แสดงรายการสินค้าทั้งหมด
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();

    res.status(200).json({ products });
  } catch (error) {
    console.error("Error retrieving products:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving products" });
  }
};

// เพิ่มสินค้าใหม่
exports.createProduct = async (req, res) => {
  try {
    const { title, artist, description, releaseDate, price, images } = req.body;

    // สร้างสินค้าในฐานข้อมูล
    const result = await Product.create({
      title,
      artist,
      description,
      releaseDate,
      price,
      images,
    });
    res.status(201).json(result);
  } catch (error) {
    console.error("Error creating product:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the product" });
  }
};

// แก้ไขข้อมูลสินค้า
exports.updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { title, artist, description, releaseDate, price, images } = req.body;

    // ค้นหาสินค้าตาม ID
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // อัพเดตข้อมูลสินค้า
    product.title = title;
    product.artist = artist;
    product.description = description;
    product.releaseDate = releaseDate;
    product.price = price;
    product.images = images;

    await product.save();

    res.status(200).json({ product });
  } catch (error) {
    console.error("Error updating product:", error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the product" });
  }
};

// ลบสินค้าออกจากระบบ
exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    // ค้นหาสินค้าตาม ID
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // ลบสินค้า
    await product.destroy();

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the product" });
  }
};

exports.getProductDetails = async (req, res) => {
  try {
    const { productId } = req.params;

    // ค้นหาสินค้าตาม ID
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.status(200).json({ product });
  } catch (error) {
    console.error("Error retrieving product details:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving product details" });
  }
};
