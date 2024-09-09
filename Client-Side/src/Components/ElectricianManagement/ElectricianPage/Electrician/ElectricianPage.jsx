import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllElectriciandataAction, DeleteComplaintAdminAction } from "../../../../ApiIntegration/Actions/ElectricianAction";
import { useNavigate } from "react-router-dom";
import { ELECTRICIAN_DELETE_RESET } from "../../../../ApiIntegration/Constants/ElectricianConstants";
import { toast } from "react-toastify";

const ElectricianPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loadingData, AllElectriciandata, deleteuserSeccess, error } =
    useSelector((state) => state.AllElectrician);

  useEffect(() => {
    dispatch(AllElectriciandataAction());
  }, [dispatch]);

  useEffect(() => {
    if (deleteuserSeccess) {
      navigate("/Admin/Dashboard");
      dispatch({ type: ELECTRICIAN_DELETE_RESET });
    }
  });

  const handleDeleteComplaint = (id) => {
    if (window.confirm("Are you sure you want to delete this complaint?")) {
      dispatch(DeleteComplaintAdminAction(id))
        .then(() => {
          toast.success("Complaint deleted successfully");
        })
        .catch((err) => {
          toast.error("Error deleting complaint");
        });
    }
  };

  const handleViewComplaint = (id) => {
    navigate(`/Admin/Dashboard/viewElectricianDetail/` + id);
  };

  const GoBack = () => {
    navigate("/Admin/Dashboard");
  };

  return (
    <>
      <section className="complaints-section">
        <div className="complaints-container">
          <h2>All Electrician</h2>
          {loadingData ? (
            <p>Loading complaints...</p>
          ) : error ? (
            <p>Error loading complaints: {error}</p>
          ) : (
            <table className="complaints-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {AllElectriciandata &&
                  AllElectriciandata.map((complaint, index) => (
                    <tr key={index}>
                      <td>{complaint.name}</td>
                      <td>{complaint.contact}</td>
                      <td>
                        <button
                          className="view-btn"
                          onClick={() => handleViewComplaint(complaint._id)}
                        >
                          View
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => handleDeleteComplaint(complaint._id)}
                        >
                          Delete
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

export default ElectricianPage;
