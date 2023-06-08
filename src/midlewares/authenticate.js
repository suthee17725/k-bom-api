const createError = require("../utils/create-error");
const userService = require("../services/user-service");

module.exports = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith("Bearer")) {
      createError("unauthorized", 401);
    }
  } catch (err) {}
};
