const CustomerModel = require("../Models/CustomerModel");

const AddComplaint = async (req, resp, next) => {
  try {
    const { customerName, customerAddress, category, description, mobile } =
      req.body;

    const CreateComplaint = await CustomerModel.create({
      customerName,
      customerAddress,
      category,
      description,
      mobile,
      user: req.UserID,
    });

    return resp.status(201).json({
      message: "Complaint Send Successfully",
      CreateComplaint,
    });
  } catch (error) {
    next(error);
  }
};

const DeleteComplaint = async (req, resp, next) => {
  try {
    const DeletedComplaint = await CustomerModel.deleteOne({
      _id: req.params.id,
    });

    return resp.status(201).json({
      message: "Deleted Successfully",
      DeletedComplaint,
    });
  } catch (error) {
    next(error);
  }
};

const ViewAllComplaint = async (req, resp, next) => {
  try {
    const viewAllData = await CustomerModel.find();

    return resp.status(201).json({
      message: "Success",
      viewAllData,
    });
  } catch (error) {
    next(error);
  }
};

const ViewSingleComplaint = async (req, resp, next) => {
  try {
    const SingleData = await CustomerModel.findOne({ _id: req.params.id });

    return resp.status(201).json({
      message: "Success",
      SingleData,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  AddComplaint,
  DeleteComplaint,
  ViewAllComplaint,
  ViewSingleComplaint,
};
