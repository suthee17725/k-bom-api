// module.exports = (sequelize, DataTypes) => {
//   const Address = sequelize.define("Address", {
//     AddressID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     HouseNo: DataTypes.STRING,
//     Street: DataTypes.STRING,
//     District: DataTypes.STRING,
//     Province: DataTypes.STRING,
//     PostalCode: DataTypes.STRING,
//   });

//   Address.associate = (models) => {
//     Address.belongsTo(models.User, {
//       foreignKey: "UserID",
//       onDelete: "CASCADE",
//     });
//   };

//   return Address;
// };
