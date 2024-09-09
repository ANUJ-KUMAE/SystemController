const CustomerModel = require("../Models/CustomerModel");
const Electrician = require("../Models/ElectricianModel");

const ResolveComplaint = async (req, resp, next) => {
  try {
    const complaint = await CustomerModel.findOne({ _id: req.params.id });

    if (!complaint) {
      return resp.status(404).json({ message: "Complaint not found" });
    }

    // Update the complaint status to 'closed'
    complaint.status = "closed";
    await complaint.save();

    // If there is an assigned electrician, update their resolved complaints count and availability
    if (complaint.assignedElectrician && complaint.assignedElectrician._id) {
      const electrician = await Electrician.findById(
        complaint.assignedElectrician._id
      );

      if (electrician) {
        electrician.resolvedComplaints += 1;
        electrician.isAvailable = true; // Set the electrician as available
        await electrician.save();
      }
    }

    resp.status(201).json({ message: "Complaint resolve Successfully" });
  } catch (error) {
    next(error);
  }
};

const TrackStaus = async (req, resp) => {
  try {
    const electricians = await Electrician.find();
    resp.status(201).json({ electricians });
  } catch (error) {
    next(error);
  }
};

module.exports = { ResolveComplaint, TrackStaus };
