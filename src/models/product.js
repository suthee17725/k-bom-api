module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
<<<<<<< HEAD
    productID: {
=======
    ProductID: {
>>>>>>> a16c367f4c316427acf9a5f9f619777bfaa117ce
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
<<<<<<< HEAD
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    description: DataTypes.STRING,
    releaseDate: DataTypes.DATE,
    price: DataTypes.DECIMAL(10, 2),

    images: {
      type: DataTypes.STRING,
      allowNull: true,
=======
    Title: DataTypes.STRING,
    Artist: DataTypes.STRING,
    Genre: DataTypes.STRING,
    ReleaseDate: DataTypes.DATE,
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
>>>>>>> a16c367f4c316427acf9a5f9f619777bfaa117ce
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
