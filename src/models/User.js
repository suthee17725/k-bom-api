module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
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
      phoneNumber: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
        validate: {
          is: /^[0-9]{10}$/,
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
        allowNull: true,
      },
      role: {
        type: DataTypes.ENUM("CUSTOMER", "ADMIN"),
        defaultValue: "CUSTOMER",
        // allowNull: false,
      },
    },
    {
      paranoid: true,
      timestamps: true,
      underscored: true,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.Order, {
      foreignKey: {
        name: "userId",
        allowNull: false,
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };
  User.isAdmin = function () {
    return this.role === "ADMIN";
  };

  return User;
};
