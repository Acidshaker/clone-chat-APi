const checkUserCredentials = require("./auth.controller");
const { success, error } = require("../utils/handleResponses");
const jwt = require("jsonwebtoken");

const postLogin = (req, res) => {
  const { email, password } = res.body;
  checkUserCredentials(email, password)
    .then((data) => {
      if (data) {
        const token = jwt.sign(
          {
            id: data.id,
            email: data.email,
          },
          "academlo"
        );
        success({
          res,
          status: 200,
          message: "Correct credentials",
          data: token,
        });
      } else {
        error({
          res,
          status: 401,
          message: "Invalid credentials",
        });
      }
    })
    .catch((err) => {
      error({
        res,
        status: 400,
        data: err,
        message: "Something Bad",
      });
    });
};

module.exports = postLogin;
