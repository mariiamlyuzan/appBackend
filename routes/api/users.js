const express = require("express");

const router = express.Router();

const {
  register,
  logIn,

  logOut,
  getCurrentUser,
} = require("../../controllers/auth");

const { auth } = require("../../middlewares/auth");
const {
  userRegisterValidation,
  userLogInValidation,
} = require("../../middlewares/validation");

router.post("/signup", userRegisterValidation, register);

router.post("/login", userLogInValidation, logIn);
router.get("/logout", auth, logOut);
router.get("/current", auth, getCurrentUser);
module.exports = router;
