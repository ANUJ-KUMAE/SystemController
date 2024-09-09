import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SingleElectricianAction } from "../../../../ApiIntegration/Actions/ElectricianAction";
import "../../Sidebar/Electrician.css";
import AddElectrician from "./AddElectrician";

const ViewElectrician = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loadingSingle, SingleComplaint, error } = useSelector(
    (state) => state.singleElectricianData
  );

  useEffect(() => {
    dispatch(SingleElectricianAction(id));
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

  const GoBack = () => {
    navigate("/Admin/Dashboard/AdminElectricians");
  };


  const { name, contact, resolvedComplaints } = SingleComplaint;

  return (
    <section className="complaint-detail-section">
      <div className="complaint-detail-container">
        <h2>Electrician Details</h2>
        <div className="complaint-detail-card">
          <div className="detail-item">
            <strong>Electrician Name:</strong>
            <span>{name}</span>
          </div>
          <div className="detail-item">
            <strong>Mobile:</strong>
            <span>{contact}</span>
          </div>
          <div className="detail-item">
            <strong>Resolve Complaints:</strong>
            <span>{resolvedComplaints}</span>
          </div>
          <div className="Electrician-button">
            <button
              className="Nav-button"
              style={{ backgroundColor: "orange" }}
              onClick={GoBack}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewElectrician;
