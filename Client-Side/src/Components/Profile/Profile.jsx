import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import profile from "../../Images/profile.jpg"
import "./Profile.css"
import { FaCircleUser } from "react-icons/fa6";

const Profile = () => {

    const { Loading, isAuthenticated, AuthUsers, error } = useSelector(
        (state) => state.AuthData
      );

      const navigate = useNavigate();

      const CancelData = () => {
         navigate("/")
      }

  return (
    <>
      <section>
        <div className="Profile-Container">
          <div className="User-profile-image">
            <figure>
              <img src={profile} alt="Profile-picture" />
            </figure>
          </div>
          <div className="Authuser-Details">
            <div className="user-profile-icon">
              <FaCircleUser className="profile-icon" />
            </div>
            <div className="Load-Login-user">
              <div className="AuthUser-Data-lists">
                <h4>Name</h4>
                <p>{AuthUsers && AuthUsers.userName}</p>
              </div>
              <div className="AuthUser-Data-lists">
                <h4>Email</h4>
                <p>{AuthUsers && AuthUsers.email}</p>
              </div>
              <div className="AuthUser-Data-lists">
                <h4>Phone</h4>
                <p>{AuthUsers && AuthUsers.phone}</p>
              </div>
            </div>
            <div className="update-cancel-button-section">
              <button className="search-button Update-Button">Update</button>
              <button
                className="search-button Cancel-Button"
                onClick={CancelData}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
