module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    OrderID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    OrderDate: DataTypes.DATE,
    TotalAmount: DataTypes.DECIMAL(10, 2),
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User, { foreignKey: "UserID" });
    Order.hasOne(models.Payment, { foreignKey: "PaymentID" });
  };

  return Order;
};
