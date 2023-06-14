module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    mobile: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        is: /^[0-9]{10}$/,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    HouseNo: DataTypes.STRING,
    Street: DataTypes.STRING,
    District: DataTypes.STRING,
    Province: DataTypes.STRING,
    PostalCode: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Order, { foreignKey: "UserID" });
  };

  return User;
};
