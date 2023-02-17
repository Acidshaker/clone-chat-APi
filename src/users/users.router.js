const userServices = require("./users.services");
const passportJwt = require("../middlewares/auth.middleware");

const router = require("express").Router();

router.get("/users", userServices.getAllUsers);

router.post("/users", userServices.postNewUser);

router.get("/me", passportJwt, userServices.getMyUser);

router.get("/me", passportJwt, userServices.deleteMyUser);
//router.patch('/')

router.get("/users/:id", userServices.getUserById);

router.patch("/users/:id", userServices.patchUser);

router.put("/users/:id", userServices.putUser);

router.delete("/users/:id", userServices.deleteUser);

module.exports = router;
