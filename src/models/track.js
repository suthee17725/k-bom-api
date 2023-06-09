module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define("Track", {
    TrackID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Title: DataTypes.STRING,
    Duration: DataTypes.STRING,
  });

  Track.associate = (models) => {
    Track.belongsTo(models.Album, { foreignKey: "AlbumID" });
  };

  return Track;
};
