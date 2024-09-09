const express = require("express");
const Validate = require("../Middlewares/ValidateMiddleware");
const AuthValidation = require("../Validations/AuthValidation");
const AuthMiddleware = require("../Middlewares/AuthMiddleware");
const {
  Register,
  userLogin,
  UserProfile,
  AllRegistereduser,
  RegisterUserSingleData,
} = require("../Controller/LoginSignUpController");
const LoginValidation = require("../Validations/LoginValidation");
const router = express.Router();

router.route("/RegisterUser").post(Validate(AuthValidation), Register);
router.route("/LoginUser").post(Validate(LoginValidation), userLogin);
router.route("/loginuser/Data").get(AuthMiddleware, UserProfile);

/* ---------------------Admin Controller---------------- */

router.route("/Allusers").get(AuthMiddleware, AllRegistereduser);
router
  .route("/register/user/singleData/:id")
  .get(AuthMiddleware, RegisterUserSingleData);

module.exports = router;
