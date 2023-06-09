module.exports = (sequelize, DataTypes) => {
  const CartItem = sequelize.define("CartItem", {
    CartItemID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Quantity: DataTypes.INTEGER,
  });

  CartItem.associate = (models) => {
    CartItem.belongsTo(models.Cart, {
      foreignKey: "CartID",
      onDelete: "CASCADE",
    });
    CartItem.belongsTo(models.Album, { foreignKey: "AlbumID" });
  };

  return CartItem;
};
