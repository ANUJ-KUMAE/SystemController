const Electrician = require("../Models/ElectricianModel");

const RegisterElectrician = async (req, resp, next) => {
  try {
    const { name, contact, electricianId } = req.body;

    const isConatct = await Electrician.findOne({ contact });

    if (isConatct) {
      return resp.status(500).json({
        message: "Electrician Already Registered",
      });
    }

    const CreateElectrician = await Electrician.create({
      name,
      contact,
      electricianId,
    });

    return resp.status(201).json({
      message: "Electrician Register Successfully",
      CreateElectrician,
    });
  } catch (error) {
    next(error);
  }
};

const DeleteElectrician = async (req, resp) => {
  try {
    const DeletedElectrician = await Electrician.deleteOne({
      _id: req.params.id,
    });

    return resp.status(201).json({
      message: "Deleted Successfully",
      DeletedElectrician,
    });
  } catch (error) {
    next(error);
  }
};

const ViewAllElectrician = async (req, resp) => {
  try {
    const Alldata = await Electrician.find();

    const TotalElectricians = Alldata.length;

    return resp.status(201).json({
      Alldata,
      TotalElectricians,
    });
  } catch (error) {
    next(error);
  }
};

const ViewSingleElectrician = async (req, resp) => {
  try {
    const SingleData = await Electrician.findOne({ _id: req.params.id });

    return resp.status(201).json({
      message: "Success",
      SingleData,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  RegisterElectrician,
  DeleteElectrician,
  ViewAllElectrician,
  ViewSingleElectrician,
};
