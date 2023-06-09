module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    CartID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  Cart.associate = (models) => {
    Cart.belongsTo(models.User, { foreignKey: "UserID" });
    Cart.hasMany(models.CartItem, {
      foreignKey: "CartID",
      onDelete: "CASCADE",
    });
  };

  return Cart;
};
