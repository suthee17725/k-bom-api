const { Op } = require("sequelize");
const { User } = require("../models");

exports.getUserByEmailOrMobile = (emailOrMobile) =>
  User.fineOne({
    where: {
      [Op.or]: [{ emil: emailOrMobile }, { mobile: emailOrMobile }],
    },
  });

exports.createUser = (user) => User.create(user);

exports.getUserById = (id) => User.findByPk(id);
