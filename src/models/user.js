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
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
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
