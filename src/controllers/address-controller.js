// const { User } = require("../models/user");

// exports.updateAddress = async (req, res) => {
//   try {
//     const user = await User.findByPk(req.user.id);

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     const { houseNumber, street, district, province, postalCode } = req.body;

//     user.address.houseNumber = houseNumber;
//     user.address.street = street;
//     user.address.district = district;
//     user.address.province = province;
//     user.address.postalCode = postalCode;

//     await user.save();

//     res.status(200).json({ message: "Address updated successfully" });
//   } catch (error) {
//     console.error("Error updating address:", error);
//     res.status(500).json({ error: "An error occurred while updating address" });
//   }
// };
