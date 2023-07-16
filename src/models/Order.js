module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User, {
      foreignKey: {
        name: "userId",
        onDelete: "CASCADE", // เพิ่มส่วนนี้สำหรับการลบ User และลบ Order ที่เกี่ยวข้องด้วย
        onUpdate: "CASCADE", // เพิ่มส่วนนี้สำหรับการอัปเดต User และอัปเดต Order ที่เกี่ยวข้องด้วย
      },
    });
    Order.belongsToMany(models.Product, {
      through: models.OrderItem,
      foreignKey: "orderId",
      onDelete: "CASCADE", // เพิ่มส่วนนี้สำหรับการลบ Order และลบ OrderItem ที่เกี่ยวข้องด้วย
      onUpdate: "CASCADE", // เพิ่มส่วนนี้สำหรับการอัปเดต Order และอัปเดต OrderItem ที่เกี่ยวข้องด้วย
    });
  };

  return Order;
};
