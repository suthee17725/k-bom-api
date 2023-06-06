module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define("Payment", {
    method: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transactionId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Payment.associate = (models) => {
    Payment.belongsTo(models.Order, {
      foreignKey: "orderId",
      onDelete: "CASCADE",
    });
  };

  return Payment;
};
