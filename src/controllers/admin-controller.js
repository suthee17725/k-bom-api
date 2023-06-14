const fx = require("fs");
const uplodeService = require("../services/upload-service");
const createError = require("../utils/create-error");
const { Product } = require("../models");

exports.uploadProductImage = async (req, res, next) => {
  try {
    if (!req.files.productImage) {
      throw createError("Product image is required");
    }

    const result = await uploadService.upload(req.files.productImage[0].path);
    const imageUrl = result.secure_url;

    res.status(200).json({ imageUrl });
  } catch (err) {
    next(err);
  } finally {
    if (req.files.productImage) {
      fs.unlinkSync(req.files.productImage[0].path);
    }
  }
};
