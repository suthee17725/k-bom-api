module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define("Album", {
    albumId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    albumCover: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Album.associate = (models) => {
    Album.belongsTo(models.Product, {
      foreignKey: "productId",
      onDelete: "CASCADE",
    });
  };

  return Album;
};
