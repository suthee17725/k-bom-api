const { Order, User, Product, OrderItem } = require("../models");

// สร้าง Order
const createOrder = async (req, res, next) => {
  try {
    const { userId, products } = req.body;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const order = await Order.create({
      userId,
      totalAmount: 0,
      status: "PENDING",
    });

    let totalAmount = 0;

    for (const product of products) {
      const { productId, quantity } = product;
      const productData = await Product.findByPk(productId);

      if (!productData) {
        return res
          .status(404)
          .json({ error: `Product with ID ${productId} not found` });
      }

      const orderItem = await OrderItem.create({
        orderId: order.orderId,
        productId,
        quantity,
        price: productData.price,
      });

      totalAmount += productData.price * quantity;
    }

    order.totalAmount = totalAmount;
    await order.save();

    return res
      .status(201)
      .json({ message: "Order created successfully", order });
  } catch (err) {
    next(err);
  }
};

// แก้ไข Order
const updateOrder = async (req, res, next) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const order = await Order.findByPk(orderId);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    order.status = status;
    await order.save();

    return res.json({ message: "Order updated successfully", order });
  } catch (err) {
    next(err);
  }
};

// ลบ Order
const deleteOrder = async (req, res, next) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findByPk(orderId);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    await order.destroy();

    return res.json({ message: "Order deleted successfully" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
};
