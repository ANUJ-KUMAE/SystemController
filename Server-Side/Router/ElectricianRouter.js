const express = require("express");
const Validate = require("../Middlewares/ValidateMiddleware");
const ElectricianValidation = require("../Validations/ElectricianValidation");
const {
  RegisterElectrician,
  DeleteElectrician,
  ViewAllElectrician,
  ViewSingleElectrician,
} = require("../Controller/ElectricianController");
const AuthMiddleware = require("../Middlewares/AuthMiddleware");
const router = express.Router();

/*------------------------Electrician Management----------------- */

router
  .route("/register/electrician")
  .post(AuthMiddleware, RegisterElectrician);
router
  .route("/delete/electrician/:id")
  .delete(AuthMiddleware, DeleteElectrician);
router.route("/view/electrician").get(AuthMiddleware, ViewAllElectrician);

router
  .route("/electrician/singleDetail/:id")
  .get(AuthMiddleware, ViewSingleElectrician);

/*-----------------------Electrician---------------------- */

module.exports = router;
