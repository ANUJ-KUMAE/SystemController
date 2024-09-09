import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetSingleComplaintAction } from "../../../ApiIntegration/Actions/ComplaintAction";
import "../Customer.css";

const ViewSingleDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { loadingSingle, SingleComplaint, error } = useSelector(
    (state) => state.singleComplaintData
  );

  useEffect(() => {
    dispatch(GetSingleComplaintAction(id));
  }, [dispatch, id]);

  if (loadingSingle) {
    return <p>Loading complaint details...</p>;
  }

  if (error) {
    return <p>Error loading complaint: {error}</p>;
  }

  if (!SingleComplaint) {
    return <p>No complaint found</p>;
  }

  const {
    customerName,
    customerAddress,
    assignedElectrician,
    category,
    description,
    mobile,
    complainDate,
    electricianName,
    electricianPhoneNumber,
  } = SingleComplaint;

  return (
    <section className="complaint-detail-section">
      <div className="complaint-detail-container">
        <h2>Complaint Details</h2>
        <div className="complaint-detail-card">
          <div className="customer-detail">
            <div className="detail-item">
              <strong>Customer Name:</strong>
              <span>{customerName}</span>
            </div>
            <div className="detail-item">
              <strong>Mobile:</strong>
              <span>{mobile}</span>
            </div>
            <div className="detail-item">
              <strong>Category:</strong>
              <span>{category}</span>
            </div>
            <div className="detail-item">
              <strong>Description:</strong>
              <p>{description}</p>
            </div>
          </div>
          <div className="detail-item">
            <strong>Customer Address:</strong>
            <div className="address-detail">
              <p>{customerAddress.street}</p>
              <p>{customerAddress.city}</p>
              <p>{customerAddress.postalCode}</p>
              <p>{customerAddress.state}</p>
              <p>{customerAddress.country}</p>
            </div>
          </div>
          <div className="detail-item">
            <strong>Assigned Electrician:</strong>
            <div className="electrician-detail">
              <p>{assignedElectrician.name || "Not Assigned"}</p>
              <p>{assignedElectrician.phoneNumber || "Not Available"}</p>
            </div>
          </div>
          <div className="detail-item">
            <strong>Complaint Date:</strong>
            <span>{new Date(complainDate).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewSingleDetail;
