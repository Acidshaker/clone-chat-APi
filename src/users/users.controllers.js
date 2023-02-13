const Users = require("../models/users.models");
const { uuid } = require("uuidv4");

const findAllUsers = async () => {
  const data = await Users.findAll();

  return data;
};

const findUserById = async (id) => {
  const data = await Users.findOne({
    where: {
      id: id,
    },
  });

  return data;
};

const createNewUser = async (userObj) => {
  const newUser = {
    id: uuid(),
    firstName: userObj.firstName,
    lastName: userObj.lastName,
    email: userObj.email,
    password: userObj.password,
    profileImage: userObj.profileImage,
    isActive: userObj.isActive,
    phone: userObj.phone,
  };

  const data = await Users.create(newUser);
  return data;
};

const updateUser = async (id, UserObj) => {
  const data = await Users.update(UserObj, {
    where: {
      id: id,
    },
  });
  return data[0];
};

const deleteUser = async (id) => {
  const data = await Users.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

module.exports = {
  findAllUsers,
  findUserById,
  createNewUser,
  updateUser,
  deleteUser,
};
