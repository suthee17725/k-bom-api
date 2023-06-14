const Product = require("../models/product");
const Cart = require("../models/cart");
const CartItem = require("../models/cartItem");

// สร้างการซื้อสินค้าใหม่
exports.purchaseProduct = async (req, res) => {
  try {
    const { productId, quantity } = req.body;

    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const cartItem = await CartItem.create({
      ProductId: product.id,
      Quantity: quantity,
    });

    let cart = await Cart.findOne({ where: { UserId: req.user.id } });

    if (!cart) {
      cart = await Cart.create({ UserId: req.user.id });
    }

    await cart.addCartItem(cartItem);

    res.status(200).json({ message: "Product purchased successfully" });
  } catch (error) {
    console.error("Error purchasing product:", error);
    res
      .status(500)
      .json({ error: "An error occurred while purchasing the product" });
  }
};
