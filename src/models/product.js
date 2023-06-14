module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    productID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    description: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    price: DataTypes.DECIMAL(10, 2),

    images: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Product.associate = (models) => {
    Product.hasMany(models.Track, {
      foreignKey: "ProductID",
      onDelete: "CASCADE",
    });
  };

  return Product;
};
