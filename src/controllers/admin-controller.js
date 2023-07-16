const { Product, User } = require("../models");

const adminService = require("../services/admin-service");

exports.getAllProduct = async (req, res, next) => {
  try {
    const result = await adminService.getAllProduct();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await adminService.getProductById(id);
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

// เพิ่มสินค้า
exports.createProduct = async (req, res, next) => {
  try {
    const value = req.body;

    const product = await adminService.createProduct(value);

    res.status(201).json({ msg: "success" });
  } catch (err) {
    next(err);
  }
};

// แก้ไขสินค้า
exports.updateProductById = async (req, res, next) => {
  try {
    const updateProduct = req.body;
    console.log("--------->", updateProduct);

    const result = await adminService.updateProductById(updateProduct);

    res.status(200).json({ message: "update success" });
  } catch (err) {
    next;
  }
};

// ลบสินค้า
exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await adminService.deleteProduct(id);

    if (result === 0) {
      throw new Error("Cannot Delete!!");
    }

    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

// สร้างผู้ใช้งาน
exports.createUser = async (req, res, next) => {
  try {
    // ตรวจสอบสิทธิ์การเข้าถึง
    if (!req.user.isAdmin()) {
      return res.status(403).json({ error: "Access denied" });
    }

    const { firstName, lastName, email, password } = req.body;

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
      role: "CUSTOMER",
    });

    return res.status(201).json({ message: "User created successfully", user });
  } catch (err) {
    next(err);
  }
};

// แก้ไขผู้ใช้งาน
exports.updateUser = async (req, res, next) => {
  try {
    // ตรวจสอบสิทธิ์การเข้าถึง
    if (!req.user.isAdmin()) {
      return res.status(403).json({ error: "Access denied" });
    }

    const { userId } = req.params;
    const { firstName, lastName, email, password } = req.body;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.password = password;

    await user.save();

    return res.json({ message: "User updated successfully", user });
  } catch (err) {
    next(err);
  }
};

// ลบผู้ใช้งาน
exports.deleteUser = async (req, res, next) => {
  try {
    // ตรวจสอบสิทธิ์การเข้าถึง
    if (!req.user.isAdmin()) {
      return res.status(403).json({ error: "Access denied" });
    }

    const { userId } = req.params;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.destroy();

    return res.json({ message: "User deleted successfully" });
  } catch (err) {
    next(err);
  }
};
exports.getAllUsers = async (req, res, next) => {
  try {
    // ตรวจสอบสิทธิ์การเข้าถึง
    if (!req.user.isAdmin()) {
      return res.status(403).json({ error: "Access denied" });
    }

    const users = await User.findAll();

    return res.json({ users });
  } catch (err) {
    next(err);
  }
};

// ดึงข้อมูลผู้ใช้แต่ละรายการ
exports.getUserById = async (req, res, next) => {
  try {
    // ตรวจสอบสิทธิ์การเข้าถึง
    if (!req.user.isAdmin()) {
      return res.status(403).json({ error: "Access denied" });
    }

    const { userId } = req.params;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json({ user });
  } catch (err) {
    next(err);
  }
};
