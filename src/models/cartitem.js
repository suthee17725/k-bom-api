module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define("CartItem", {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  });

  CartItem.associate = (models) => {
    CartItem.belongsTo(models.Cart, {
      foreignKey: "cartId",
      onDelete: "CASCADE",
    });
    CartItem.belongsTo(models.Product, {
      foreignKey: "productId",
      onDelete: "CASCADE",
    });
  };

  return CartItem;
};
