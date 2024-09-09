import React, { useEffect, useState } from "react";
import CustomerServices from "../CustomerServices";
import { useDispatch, useSelector } from "react-redux";
import {
  AddComplaintAction,
  ClearAddComplaintError,
} from "../../../ApiIntegration/Actions/ComplaintAction";
import { useNavigate } from "react-router-dom";
import { RESET_COMPLAINT_ADD } from "../../../ApiIntegration/Constants/ComplaintConstants";
import { toast } from "react-toastify";
import { automaticComplaintAssignment } from "../../../ApiIntegration/Actions/AssignComplainAction";
import { RESET_AUTOMATIC_COMPLETE } from "../../../ApiIntegration/Constants/AutomaticComplain";

const AddComplaint = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState({
    street: "",
    city: "",
    postalCode: "",
    state: "",
    country: "",
  });
  const [category, setCategory] = useState("Electrical");
  const [description, setDescription] = useState("");
  const [mobile, setMobile] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, AddCustomerComplaint, complaintAddedSuccess, error } =
    useSelector((state) => state.ComplaintAdded);

  useEffect(() => {
    if (error) {
      const message = error.data.message;

      if (Array.isArray(message)) {
        message.forEach((msg) => {
          toast.error(msg);
        });
      } else {
        toast.error(message || error.data.extraDetails);
      }

      dispatch(ClearAddComplaintError());
    }

    if (complaintAddedSuccess) {
      dispatch(automaticComplaintAssignment());
      navigate("/customer/complaint/page");
      dispatch({ type: RESET_COMPLAINT_ADD });
      //dispatch({ type: RESET_AUTOMATIC_COMPLETE });
      //toast.success("Complaint Assigned Successfully");
    }
  }, [dispatch, error, toast, complaintAddedSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      AddComplaintAction(
        customerName,
        customerAddress,
        category,
        description,
        mobile
      )
    );
  };

  const handleAddressChange = (e) => {
    setCustomerAddress({ ...customerAddress, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section>
        <div className="complaint-container">
          <h2>File a Complaint</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Customer Name:</label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Category:</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="Electrical">Electrical</option>
                <option value="Plumbing">Plumbing</option>
                <option value="HVAC">HVAC</option>
              </select>
            </div>

            <div className="form-group">
              <label>Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="form-group">
              <label>Your Address:</label>
            </div>

            <div className="form-group">
              <label>Street:</label>
              <input
                type="text"
                name="street"
                value={customerAddress.street}
                onChange={handleAddressChange}
              />
            </div>
            <div className="form-group">
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={customerAddress.city}
                onChange={handleAddressChange}
              />
            </div>
            <div className="form-group">
              <label>Postal Code:</label>
              <input
                type="number"
                name="postalCode"
                value={customerAddress.postalCode}
                onChange={handleAddressChange}
              />
            </div>
            <div className="form-group">
              <label>State:</label>
              <input
                type="text"
                name="state"
                value={customerAddress.state}
                onChange={handleAddressChange}
              />
            </div>
            <div className="form-group">
              <label>Country:</label>
              <input
                type="text"
                name="country"
                value={customerAddress.country}
                onChange={handleAddressChange}
              />
            </div>

            <div className="form-group">
              <label>Mobile:</label>
              <input
                type="number"
                name="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <button className="submit-button">Submit Complaint</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddComplaint;
