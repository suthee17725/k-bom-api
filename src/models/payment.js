module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define("Payment", {
    PaymentID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Method: DataTypes.STRING,
    Amount: DataTypes.DECIMAL(10, 2),
  });

  return Payment;
};
