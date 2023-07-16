const { token } = require("morgan");
const adminRepository = require("../repositories/admin-repositories");

exports.createProduct = (product) => adminRepository.createProduct(product);

exports.updateProductById = (updateProduct) =>
  adminRepository.updateProductById(updateProduct);

exports.getAllProduct = () => adminRepository.getAllProduct();

exports.deleteProduct = (id) => adminRepository.deleteProduct(id);

exports.getProductById = (id) => adminRepository.getProductById(id);
