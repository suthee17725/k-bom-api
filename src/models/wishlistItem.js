module.exports = (sequelize, DataTypes) => {
  const WishlistItem = sequelize.define("WishlistItem", {});

  WishlistItem.associate = (models) => {
    WishlistItem.belongsTo(models.Wishlist, {
      foreignKey: "wishlistId",
      onDelete: "CASCADE",
    });
    WishlistItem.belongsTo(models.Product, {
      foreignKey: "productId",
      onDelete: "CASCADE",
    });
  };

  return WishlistItem;
};
