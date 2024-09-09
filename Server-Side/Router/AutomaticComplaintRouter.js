const express = require("express");
const AutomaticComplaint = require("../Controller/AutomaticComplaint");
const router = express.Router();

router.route("/assign-complaints").post(AutomaticComplaint);

module.exports = router;