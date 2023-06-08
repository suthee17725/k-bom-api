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
    avatar: {
      type: DataTypes.STRING,
      defaultValue: "default-avatar.png",
    },
  });

  User.associate = (models) => {
    User.hasMany(models.Address, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
    User.hasMany(models.Cart, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
    User.hasMany(models.Wishlist, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
    User.hasMany(models.Order, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
  };

  return User;
};
