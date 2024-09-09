const express = require("express");
const router = express.Router();
const {
  ResolveComplaint,
  TrackStaus,
} = require("../Controller/ResolveComplaint");
const AuthMiddleware = require("../Middlewares/AuthMiddleware");

router.route("/electrician/:id").put(ResolveComplaint);
router.route("/Track/Status").get(TrackStaus);

module.exports = router;
