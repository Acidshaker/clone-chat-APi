const bcrypt = require("bcrypt");

const hashPassword = (plainTextPassword) => {
  return bcrypt.hashSync(plainTextPassword, 10);
};

const comparePassword = (plainTextPassword, hashedTextPassword) => {
  return bcrypt.compareSync(plainTextPassword, hashedTextPassword);
};

module.exports = {
  hashPassword,
  comparePassword,
};
