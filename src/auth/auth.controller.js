const { findUserByEmail } = require("../users/users.controllers");
const { comparePassword } = require("../utils/crypto");

const checkUserCredentials = async (email, password) => {
  try {
    const user = await findUserByEmail(email);
    const verifyPassword = comparePassword(password, user.password);
    verifyPassword ? user : false;
  } catch (error) {
    return false;
  }
};

module.exports = checkUserCredentials;
