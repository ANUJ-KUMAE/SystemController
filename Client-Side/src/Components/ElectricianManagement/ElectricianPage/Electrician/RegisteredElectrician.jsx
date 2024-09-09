import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllRegisteredElectricianAction } from "../../../../ApiIntegration/Actions/AuthAction";
import { useNavigate } from "react-router-dom";

const RegisteredElectrician = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loadingAll, AllUsersregister, error } = useSelector(
    (state) => state.adminUsers
  );

  useEffect(() => {
    dispatch(AllRegisteredElectricianAction());
  }, [dispatch]);

  const handleViewComplaint = (id) => {
    navigate(`/Admin/Dashboard/viewRegisterSingleUser/` + id);
  };

  return (
    <>
      <section className="complaints-section">
        <div className="complaints-container">
          <h2>All Registered Electrician</h2>
          {loadingAll ? (
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
                {AllUsersregister &&
                  AllUsersregister.filter(
                    (user) => user.userType === "Electrician"
                  ) // Filter electricians
                    .map((electrician, index) => (
                      <tr key={index}>
                        <td>{electrician.userName}</td>
                        <td>{electrician.phone}</td>
                        <td>
                          <button
                            className="view-btn"
                            onClick={() => handleViewComplaint(electrician._id)}
                          >
                            View
                          </button>
                          
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </>
  );
};

export default RegisteredElectrician;
