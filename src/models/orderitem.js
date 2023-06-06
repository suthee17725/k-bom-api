module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define("OrderItem", {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
  });

  OrderItem.associate = (models) => {
    OrderItem.belongsTo(models.Order, {
      foreignKey: "orderId",
      onDelete: "CASCADE",
    });
    OrderItem.belongsTo(models.Product, {
      foreignKey: "productId",
      onDelete: "CASCADE",
    });
  };

  return OrderItem;
};
