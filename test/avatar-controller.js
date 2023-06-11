// const User = require("../models/user");

// // อัปโหลดรูปภาพประจำตัวของผู้ใช้
// exports.uploadAvatar = async (req, res) => {
//   try {
//     const user = await User.findByPk(req.user.id);

//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     // ทำตามขั้นตอนการอัปโหลดรูปภาพไปยังที่เก็บ (Cloudinary)

//     // อัปเดต URL ของรูปภาพประจำตัวในรายละเอียดผู้ใช้
//     user.avatarUrl = "URL ของรูปภาพประจำตัวที่อัปโหลด";

//     await user.save();

//     res.status(200).json({ message: "Avatar uploaded successfully" });
//   } catch (error) {
//     console.error("Error uploading avatar:", error);
//     res.status(500).json({ error: "An error occurred while uploading avatar" });
//   }
// };

//ยังไม่ใช้งาน
