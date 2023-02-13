const userControllers = require("./users.controllers");
const { success, error } = require("../utils/handleResponses");

const getAllUsers = (req, res) => {
  userControllers
    .findAllUsers()
    .then((data) => {
      success({
        res,
        data,
        status: 200,
        message: "Request succesful",
      });
    })
    .catch((err) => {
      error({
        res,
        data: err,
        status: 400,
        message: "An error occurred while trying to display all users",
      });
    });
};

const getUserById = (req, res) => {
  const id = req.params.id;

  userControllers
    .findUserById(id)
    .then((data) => {
      if (data) {
        success({
          res,
          data,
          status: 200,
          message: "Request succesful",
        });
      } else {
        error({
          res,
          data,
          status: 404,
          message: "User not found",
        });
      }
    })
    .catch((err) => {
      error({
        res,
        data,
        status: 400,
        message: "The request could not be completed",
      });
    });
};

const postNewUser = (req, res) => {
  const userObj = req.body;
  userControllers
    .createNewUser(userObj)
    .then((data) => {
      success({
        res,
        data,
        status: 201,
        message: "User created",
      });
    })
    .catch((err) => {
      error({
        res,
        data: err,
        status: 400,
        message: "Failed to create user",
        fields: {
          firstName: "String",
          lastName: "String",
          email: "example@maildomain.com (Unique value)",
          password: "String",
          profileImage: "String (Optional value)",
          isActive: "Boolean (Default value: true)",
          phone: "String (max: 16 characters)",
        },
      });
    });
};

const deleteUser = (req, res) => {
  const id = req.params.id;

  userControllers
    .deleteUser(id)
    .then((data) => {
      if (data) {
        success({
          res,
          data,
          status: 204,
          message: "User has been deleted",
        });
      } else {
        error({
          res,
          data,
          status: 404,
          message: "User not found",
        });
      }
    })
    .catch((err) => {
      error({
        res,
        data,
        status: 400,
        message: "The request could not be completed",
      });
    });
};

const patchUser = (req, res) => {
  const id = req.params.id;
  const userObj = req.body;
  userControllers
    .updateUser(id, userObj)
    .then((data) => {
      if (data) {
        success({
          res,
          data,
          status: 200,
          message: `User with id: ${id} updated succesfully`,
        });
      } else {
        error({
          res,
          data,
          status: 404,
          message: "User not found",
        });
      }
    })
    .catch((err) => {
      error({
        res,
        data,
        status: 400,
        message: "The request could not be completed",
      });
    });
};

const putUser = (req, res) => {
  const id = req.params.id;
  const userObj = req.body;

  if (
    !userObj.firstName ||
    !userObj.lastName ||
    !userObj.email ||
    !userObj.password ||
    !userObj.phone
  ) {
    return error({
      res,
      data: err,
      status: 400,
      message: "Failed to create user",
      fields: {
        firstName: "String",
        lastName: "String",
        email: "example@maildomain.com (Unique value)",
        password: "String",
        profileImage: "String (Optional value)",
        isActive: "Boolean (Default value: true)",
        phone: "String (max: 16 characters)",
      },
    });
  }

  userControllers
    .updateUser(id, userObj)
    .then((data) => {
      if (data) {
        success({
          res,
          data,
          status: 200,
          message: `User with id: ${id} updated succesfully`,
        });
      } else {
        error({
          res,
          data,
          status: 404,
          message: "User not found",
        });
      }
    })
    .catch((err) => {
      error({
        res,
        data,
        status: 400,
        message: "The request could not be completed",
      });
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  postNewUser,
  deleteUser,
  patchUser,
  putUser,
};
