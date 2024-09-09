import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  DeleteComplaintAction,
  GetAllCompaintDataAction,
} from "../../../ApiIntegration/Actions/ComplaintAction";
import "../Customer.css";
import { COMPLAINT_DELETE_RESET } from "../../../ApiIntegration/Constants/ComplaintConstants";
import { toast } from "react-toastify";
import { ResolveComplaintAction } from "../../../ApiIntegration/Actions/ResolveAction";
import { RESET_RESOLVE_COMPLAINT } from "../../../ApiIntegration/Constants/ResolveComplaint";

const ViewComplaint = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loadingData, AllComplaints, error } = useSelector(
    (state) => state.AllComplaintData
  );

  const { AuthUsers } = useSelector((state) => state.AuthData);

  const { loadingSingle, deleteComplaintSuccess } = useSelector(
    (state) => state.singleComplaintData
  );

  const { complaintResolved } = useSelector((state) => state.resolveComplaints);

  const Authid = AuthUsers && AuthUsers._id;

  useEffect(() => {
    if (complaintResolved)
    {
      navigate("/customer/complaint/page");

      dispatch({
        type: RESET_RESOLVE_COMPLAINT,
      });
    }
  }, [dispatch, navigate, complaintResolved]);

  useEffect(() => {
    dispatch(GetAllCompaintDataAction());
  }, [dispatch]);

  useEffect(() => {
    if (deleteComplaintSuccess) {
      navigate("/customer/complaint/page");

      dispatch({ type: COMPLAINT_DELETE_RESET });
    }
  });

  const handleDeleteComplaint = (id) => {
    if (window.confirm("Are you sure you want to delete this complaint?")) {
      dispatch(DeleteComplaintAction(id))
        .then(() => {
          toast.success("Complaint deleted successfully");
        })
        .catch((err) => {
          toast.error("Error deleting complaint");
        });
    }
  };

  const handleViewComplaint = (id) => {
    navigate(`/viewSingle/complaint/` + id);
  };

  const handleResolveComplaint = (id) => {
    dispatch(ResolveComplaintAction(id));
  };

  const GoBack = () => {
    navigate("/customer/complaint/page");
  };

  const userComplaints =
    AllComplaints &&
    AllComplaints.filter((complaint) => complaint.user === Authid);

  return (
    <>
      <section className="complaints-section">
        <div className="complaints-container">
          <h2>Your Complaints</h2>
          {loadingData ? (
            <p>Loading complaints...</p>
          ) : error ? (
            <p>Error loading complaints: {error}</p>
          ) : userComplaints.length === 0 ? (
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
                {userComplaints &&
                  userComplaints.map((complaint) => (
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
                        <button
                          className="delete-btn"
                          onClick={() => handleDeleteComplaint(complaint._id)}
                        >
                          Delete
                        </button>
                        <button
                          className="resolve-btn"
                          style={{ backgroundColor: "blue", marginLeft: "8px" , color:"white"}}
                          onClick={() => handleResolveComplaint(complaint._id)}
                          disabled={complaint.status === "closed"}
                        >
                          Resolve
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

export default ViewComplaint;
