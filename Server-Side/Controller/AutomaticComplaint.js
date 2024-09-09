const Electrician = require("../Models/ElectricianModel");
const CustomerModel = require("../Models/CustomerModel");


const AutomaticComplaint = async (req, resp, next) => {
  try {
    // Get available electricians
    const electricians = await Electrician.find({ isAvailable: true });

    // Check if there are any available electricians
    if (electricians.length === 0) {
      return resp
        .status(500)
        .json({ message: "No available electricians for assignment" });
    }

    // Get an open complaint
    const complaints = await CustomerModel.find({ status: "open" });

    // Check if there are any open complaints
    if (!complaints) {
      return resp.status(500).json({ message: "No open complaints to assign" });
    }

    let currentElectricianIndex = 0;

    // Assign complaints to electricians in a round-robin manner
    for (let complaint of complaints) {
      const electrician = electricians[currentElectricianIndex];

      // Assign electrician details to the complaint
      complaint.assignedElectrician = {
        _id: electrician._id,
        name: electrician.name,
        phoneNumber: electrician.contact,
      };

      // Mark complaint as "in-progress"
      complaint.status = "in-progress";

      // Save the updated complaint
      await complaint.save();

      // Update round-robin index
      currentElectricianIndex =
        (currentElectricianIndex + 1) % electricians.length;
    }


    return resp.status(201).json({
      message: `Complaint assigned to successfully`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = AutomaticComplaint;
