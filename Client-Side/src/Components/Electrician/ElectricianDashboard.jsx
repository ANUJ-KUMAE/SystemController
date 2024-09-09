import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AllElectriciandataAction } from "../../ApiIntegration/Actions/ElectricianAction";
import { GetAllCompaintDataAction } from "../../ApiIntegration/Actions/ComplaintAction";
import "./Electrician.css";

const ElectricianDashboard = () => {
  const [filteredComplaints, setFilteredComplaints] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { AllComplaints } = useSelector((state) => state.AllComplaintData);

  const { loadingData, AllElectriciandata, deleteuserSeccess, error } =
    useSelector((state) => state.AllElectrician);

  const { AuthUsers } = useSelector((state) => state.AuthData);

  useEffect(() => {
    dispatch(AllElectriciandataAction());
  }, []);

  useEffect(() => {
    dispatch(GetAllCompaintDataAction());
  }, []);

  useEffect(() => {
    if (AllElectriciandata && AuthUsers) {
      const Authid = AuthUsers._id;

      // Filter electricians based on AuthUsers._id
      const findElectrician = AllElectriciandata.find(
        (electrician) => electrician.electricianId === Authid
      );

      if (findElectrician) {
        // Filter complaints based on the assigned electrician's _id
        const userComplaints = AllComplaints.filter(
          (complaint) =>
            complaint.assignedElectrician._id === findElectrician._id
        );

        setFilteredComplaints(userComplaints);
      }
    }
  }, [AllElectriciandata, AllComplaints, AuthUsers]);

  const handleViewComplaint = (id) => {
    navigate(`/viewSingle/complaint/` + id);
  };

  const GoBack = () => {
    navigate("/customer/complaint/page");
  };

  return (
    <>
      <section className="complaints-section">
        <div className="complaints-container">
          <h2>Your Assigned Complaints</h2>
          {loadingData ? (
            <p>Loading complaints...</p>
          ) : error ? (
            <p>Error loading complaints: {error}</p>
          ) : filteredComplaints.length === 0 ? (
            <p>No complaints available.</p>
          ) : (
            <table className="complaints-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredComplaints &&
                  filteredComplaints.map((complaint) => (
                    <tr key={complaint._id}>
                      <td>{complaint.category}</td>
                      <td>{complaint.status}</td>
                      <td>
                        <button
                          className="view-btn"
                          onClick={() => handleViewComplaint(complaint._id)}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}
          <div className="Go-back-Section">
            <button
              className="Nav-button"
              style={{ backgroundColor: "orange" }}
              onClick={GoBack}
            >
              Go Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ElectricianDashboard;
