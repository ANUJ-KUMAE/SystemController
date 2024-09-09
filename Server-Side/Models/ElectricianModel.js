const mongoose = require("mongoose");

const electricianSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  resolvedComplaints: { type: Number, default: 0 },
  isAvailable: { type: Boolean, default: true },
  electricianId: { type: mongoose.Schema.Types.ObjectId, required: true }
});

const Electrician = new mongoose.model("Electrician", electricianSchema);

module.exports = Electrician;
