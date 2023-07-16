const { user, Product, payment, order, orderitem } = require("../models");
const {
  sequelize,
  Sequelize,
  fn,
  Op,
  literal,
  col,
  where,
} = require("sequelize");

exports.createProduct = (product) => Product.create(product);

exports.getAllProduct = () => Product.findAll();

exports.getProductById = (id) => Product.findByPk(id);

exports.deleteProduct = (id) => {
  return Product.destroy({
    where: {
      id: id,
    },
  });
};
exports.updateProductById = (updateProduct) => {
  return Product.update(updateProduct, {
    where: {
      id: updateProduct.id,
    },
  });
};
