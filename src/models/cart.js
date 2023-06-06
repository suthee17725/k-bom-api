module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });

  Cart.associate = (models) => {
    Cart.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
    Cart.hasMany(models.CartItem, {
      foreignKey: "cartId",
      onDelete: "CASCADE",
    });
  };

  return Cart;
};
