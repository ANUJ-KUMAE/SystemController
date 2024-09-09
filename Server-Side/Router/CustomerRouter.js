const express = require("express");
const Validate = require("../Middlewares/ValidateMiddleware");
const CustomerValidation = require("../Validations/CustomerValidation");
const { AddComplaint, DeleteComplaint, ViewAllComplaint, ViewSingleComplaint } = require("../Controller/CustomerController");
const AuthMiddleware = require("../Middlewares/AuthMiddleware");
const router = express.Router();

router.route("/create/complaint").post(Validate(CustomerValidation), AuthMiddleware, AddComplaint);
router.route("/delete/complaint/:id").delete(AuthMiddleware, DeleteComplaint);
router.route("/All/Complaint").get(AuthMiddleware, ViewAllComplaint);
router.route("/get/SingleComplaint/:id").get(AuthMiddleware, ViewSingleComplaint);

module.exports = router;