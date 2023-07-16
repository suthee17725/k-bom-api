module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define("Payment", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Payment.associate = (models) => {
    Payment.belongsTo(models.Order, {
      foreignKey: {
        name: "orderId",
        onDelete: "CASCADE", // ให้ลบ Payment เมื่อลบ Order ที่เกี่ยวข้องด้วย
        onUpdate: "CASCADE", // ให้อัปเดต Payment เมื่ออัปเดต Order ที่เกี่ยวข้องด้วย
      },
    });
  };

  return Payment;
};
