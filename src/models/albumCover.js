module.exports = (sequelize, DataTypes) => {
  const AlbumCover = sequelize.define("AlbumCover", {
    AlbumCoverID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  AlbumCover.associate = (models) => {
    AlbumCover.belongsTo(models.Album, { foreignKey: "AlbumID" });
  };

  return AlbumCover;
};
