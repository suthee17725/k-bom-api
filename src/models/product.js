module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    ProductID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Title: DataTypes.STRING,
    Artist: DataTypes.STRING,
    Genre: DataTypes.STRING,
    ReleaseDate: DataTypes.DATE,
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
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
