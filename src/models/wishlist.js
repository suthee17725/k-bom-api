module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define("Wishlist", {
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  });

  Wishlist.associate = (models) => {
    Wishlist.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
    Wishlist.hasMany(models.WishlistItem, {
      foreignKey: "wishlistId",
      onDelete: "CASCADE",
    });
  };

  return Wishlist;
};
