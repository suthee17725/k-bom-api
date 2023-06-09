module.exports = (sequelize, DataTypes) => {
  const Avatar = sequelize.define("Avatar", {
    AvatarID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Avatar.associate = (models) => {
    Avatar.belongsTo(models.User, { foreignKey: "UserID" });
  };

  return Avatar;
};
