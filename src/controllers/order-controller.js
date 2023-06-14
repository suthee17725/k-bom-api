const Order = require("../models/order");

// สร้างคำสั่งซื้อใหม่
exports.createOrder = async (req, res) => {
  try {
    // รับข้อมูลที่จำเป็นจาก body
    const { userId, ProductID, quantity } = req.body;

    // สร้างคำสั่งซื้อใหม่
    const order = await Order.create({
      userId,
      ProductID,
      quantity,
    });

    res.status(201).json({ order });
  } catch (error) {
    console.error("Error creating order:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the order" });
  }
};

// ดูรายละเอียดคำสั่งซื้อ
exports.getOrderDetails = async (req, res) => {
  try {
    const orderId = req.params.orderId;

    // ค้นหาคำสั่งซื้อในฐานข้อมูล
    const order = await Order.findByPk(orderId);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    res.status(200).json({ order });
  } catch (error) {
    console.error("Error retrieving order details:", error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving order details" });
  }
};

// ยกเลิกคำสั่งซื้อ
exports.cancelOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;

    // ค้นหาคำสั่งซื้อในฐานข้อมูล
    const order = await Order.findByPk(orderId);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    // ทำการยกเลิกคำสั่งซื้อ
    await order.destroy();

    res.status(200).json({ message: "Order canceled successfully" });
  } catch (error) {
    console.error("Error canceling order:", error);
    res
      .status(500)
      .json({ error: "An error occurred while canceling the order" });
  }
};
