const { token } = require("morgan");
const userRepository = require("../repositories/user-repositories");

exports.checkEmailExist = async (email) => {
  const existUser = await userRepository.getUserByEmail(email);
  return existUser;
};

exports.createUser = (user) => userRepository.createUser(user);

exports.getUserByEmail = async (email) => {
  const user = await userRepository.getUserByEmail(email);
  return user;
};

exports.getUserById = (id) => userRepository.getUserById(id);
