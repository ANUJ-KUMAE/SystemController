import React from "react";
import "./Navbar.css";
import HLogo from "../../Images/Logo.jpeg";
import { FaChevronDown } from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../ApiIntegration/Actions/AuthAction";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Loading, isAuthenticated, AuthUsers, error } = useSelector(
    (state) => state.AuthData
  );

  const Logoutuser = () => {
    dispatch(Logout());
    navigate("/login");
  };

  return (
    <>
      <header>
        <div className="nav-container">
          <div className="Nav-left">
            <figure>
              <img src={HLogo} alt="NavImage" />
            </figure>
          </div>
          <div className="Nav-Mid">
            <ul className="Nav-lists">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              {isAuthenticated && isAuthenticated ? (
                <li>
                  <NavLink>
                    <li className="More-page-icons">
                      More <FaChevronDown className="down-icon" />
                    </li>
                  </NavLink>
                  <ul className="Menu-Dropdown">
                    <li className="drop-lists">
                      <NavLink to="/profile">Profile</NavLink>
                    </li>
                    {AuthUsers && AuthUsers.userType === "Customer" ? (
                      <>
                        <hr className="drop-lists-horizontal" />
                        <li className="drop-lists">
                          <NavLink to="/customer/complaint/page">
                            Customer Complaints
                          </NavLink>
                        </li>
                      </>
                    ) : null}
                    {AuthUsers && AuthUsers.userType === "Electrician" ? (
                      <>
                        <hr className="drop-lists-horizontal" />
                        <li className="drop-lists">
                          <NavLink to="/Electrician/dashboard">
                            Electrician Dashboard
                          </NavLink>
                        </li>
                      </>
                    ) : null}
                    <hr className="drop-lists-horizontal" />
                    <li className="drop-lists">
                      <NavLink to="/contact">Contact</NavLink>
                    </li>
                    {AuthUsers && AuthUsers.userType === "Admin" ? (
                      <>
                        <hr className="drop-lists-horizontal" />
                        <li className="drop-lists">
                          <NavLink to="/Admin/Dashboard">
                            Electrician Management
                          </NavLink>
                        </li>
                      </>
                    ) : null}
                  </ul>
                </li>
              ) : null}
            </ul>
          </div>
          <div className="Nav-right">
            {isAuthenticated ? (
              <button
                className="Nav-button"
                onClick={Logoutuser}
                style={{ backgroundColor: "orange" }}
              >
                Logout
              </button>
            ) : (
              <NavLink to="/login">
                <button
                  className="Nav-button"
                  style={{ backgroundColor: "orange" }}
                >
                  Login
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
