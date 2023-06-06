module.exports = (sequelize, DataTypes) => {
  const Shipment = sequelize.define("Shipment", {
    trackingNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });

  Shipment.associate = (models) => {
    Shipment.belongsTo(models.Order, {
      foreignKey: "orderId",
      onDelete: "CASCADE",
    });
    Shipment.belongsTo(models.Address, {
      foreignKey: "addressId",
      onDelete: "CASCADE",
    });
  };

  return Shipment;
};
