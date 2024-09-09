import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSingleUserAction } from "../../../../ApiIntegration/Actions/AuthAction";
import { useNavigate, useParams } from "react-router-dom";

const ViewRegisterUser = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loadingSingle, SingleUser, error } = useSelector(
    (state) => state.adminSingleUser
  );

  useEffect(() => {
    dispatch(GetSingleUserAction(id));
  }, [dispatch, id]);

  if (loadingSingle) {
    return <p>Loading complaint details...</p>;
  }

  if (error) {
    return <p>Error loading complaint: {error}</p>;
  }

  if (!SingleUser) {
    return <p>No complaint found</p>;
  }

  const GoBack = () => {
    navigate("/Admin/Dashboard/AdminElectricians");
  };

  const ElectricAdd = (id) => {
    navigate(`/Admin/Dashboard/adminAddElectrician/` + id);
  };

  const { userName, email, phone, userType } = SingleUser;

  return (
    <section className="complaint-detail-section">
      <div className="complaint-detail-container">
        <h2>Electrician Details</h2>
        <div className="complaint-detail-card">
          <div className="detail-item">
            <strong>Name:</strong>
            <span>{userName}</span>
          </div>
          <div className="detail-item">
            <strong>Email:</strong>
            <span>{email}</span>
          </div>
          <div className="detail-item">
            <strong>Mobile:</strong>
            <span>{phone}</span>
          </div>
          <div className="detail-item">
            <strong>User Type:</strong>
            <span>{userType}</span>
          </div>
          <div className="Electrician-button">
            <button
              className="Nav-button"
              style={{ backgroundColor: "orange" }}
              onClick={GoBack}
            >
              Cancel
            </button>
            <button
              className="Nav-button"
              style={{ backgroundColor: "red" }}
              onClick={() => ElectricAdd(SingleUser._id)}
            >
              Add Electrician
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewRegisterUser;
