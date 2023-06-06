module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    orderNumber: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    totalAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    paymentStatus: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Order.associate = (models) => {
    Order.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
    Order.belongsTo(models.Address, {
      foreignKey: "addressId",
      onDelete: "CASCADE",
    });
    Order.belongsToMany(models.Product, {
      through: models.OrderItem,
      foreignKey: "orderId",
      as: "products",
    });
  };

  return Order;
};
