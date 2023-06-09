module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define("Album", {
    AlbumID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Title: DataTypes.STRING,
    Artist: DataTypes.STRING,
    Genre: DataTypes.STRING,
    ReleaseDate: DataTypes.DATE,
  });

  Album.associate = (models) => {
    Album.hasMany(models.Track, { foreignKey: "AlbumID", onDelete: "CASCADE" });
  };

  return Album;
};
