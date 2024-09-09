const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerAddress: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  category: { type: String, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ["open", "in-progress", "closed"],
    default: "open",
  },
  mobile: { type: String, required: true },
  assignedElectrician: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "Electrician",

    _id: { type: mongoose.Schema.Types.ObjectId, ref: "Electrician" },
    name: { type: String },
    phoneNumber: { type: String },
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "AuthModel" },
  complainDate: { type: Date, default: Date.now },
});

const CustomerModel = new mongoose.model("Customer", CustomerSchema);

module.exports = CustomerModel;
