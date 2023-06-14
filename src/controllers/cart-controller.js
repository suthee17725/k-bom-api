const Cart = require("../models/cart");
const CartItem = require("../models/cartItem");

// เพิ่มสินค้าในตะกร้าสินค้า
exports.addToCart = async (req, res) => {
  try {
    const { ProductID, quantity } = req.body;

    // ตรวจสอบว่าผู้ใช้มีตะกร้าสินค้าหรือยัง
    let cart = await Cart.findOne({ where: { UserID: req.user.id } });

    // ถ้าไม่มีตะกร้าสินค้า ให้สร้างใหม่
    if (!cart) {
      cart = await Cart.create({ UserID: req.user.id });
    }

    // สร้างรายการในตะกร้าสินค้า
    const cartItem = await CartItem.create({
      ProductID: ProductID,
      Quantity: quantity,
    });

    // เพิ่มรายการในตะกร้าสินค้า
    await cart.addCartItem(cartItem);

    res.status(200).json({ message: "Product added to cart successfully" });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    res
      .status(500)
      .json({ error: "An error occurred while adding the product to cart" });
  }
};

// แสดงรายการสินค้าในตะกร้าสินค้า
exports.getCartItems = async (req, res) => {
  try {
    // ตรวจสอบว่ามีตะกร้าสินค้าหรือไม่
    const cart = await Cart.findOne({ where: { UserID: req.user.id } });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // ดึงรายการสินค้าในตะกร้า
    const cartItems = await cart.getCartItems();

    res.status(200).json({ cartItems });
  } catch (error) {
    console.error("Error retrieving cart items:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving cart items" });
  }
};

// ลบรายการสินค้าออกจากตะกร้าสินค้า
exports.removeFromCart = async (req, res) => {
  try {
    const { cartItemId } = req.params;

    // ค้นหารายการในตะกร้าสินค้าที่ต้องการลบ
    const cartItem = await CartItem.findByPk(cartItemId);

    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    // ลบรายการออกจากตะกร้าสินค้า
    await cartItem.destroy();

    res.status(200).json({ message: "Cart item removed successfully" });
  } catch (error) {
    console.error("Error removing cart item:", error);
    res
      .status(500)
      .json({ error: "An error occurred while removing the cart item" });
  }
};

// ลบตะกร้าสินค้าทั้งหมด
exports.clearCart = async (req, res) => {
  try {
    // ตรวจสอบว่ามีตะกร้าสินค้าหรือยัง
    const cart = await Cart.findOne({ where: { UserID: req.user.id } });

    if (!cart) {
      return res.status(404).json({ error: "Cart not found" });
    }

    // ลบรายการสินค้าทั้งหมดในตะกร้า
    await cart.destroy();

    res.status(200).json({ message: "Cart cleared successfully" });
  } catch (error) {
    console.error("Error clearing cart:", error);
    res
      .status(500)
      .json({ error: "An error occurred while clearing the cart" });
  }
};
