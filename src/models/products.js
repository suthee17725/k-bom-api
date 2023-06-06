module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    albumCover: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Category, {
      foreignKey: "categoryId",
      onDelete: "CASCADE",
    });
    Product.hasMany(models.OrderItem, {
      foreignKey: "productId",
      onDelete: "CASCADE",
    });
    Product.hasMany(models.WishlistItem, {
      foreignKey: "productId",
      onDelete: "CASCADE",
    });
  };

  return Product;
};
