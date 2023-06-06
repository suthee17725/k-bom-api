module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define("Address", {
    houseNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    soi: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    postalCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Address.associate = (models) => {
    Address.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
  };

  return Address;
};
