import React from "react";
import { IoPerson } from "react-icons/io5";
import { GrCompliance } from "react-icons/gr";
import { LuView } from "react-icons/lu";
import { IoSettings } from "react-icons/io5";
import "./Customer.css";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const CustomerServices = () => {
  const { AuthUsers } = useSelector((state) => state.AuthData);

  return (
    <>
      <section>
        <div className="Complaint-Siderbar-Container">
          <div className="Sidebar-services-icons">
            <IoPerson />
            <p>{AuthUsers && AuthUsers.userName}</p>
          </div>
          <div className="Complaint-Sidebar-lists">
            <ul>
              <NavLink to="/customer/complaint/page/addComplaint">
                <li className="Sidebar-list-icons">
                  <GrCompliance className="Sidebar-icons" />
                  Add Complaint
                </li>
              </NavLink>
              <NavLink to="/customer/complaint/page/viewComplaints">
                <li className="Sidebar-list-icons">
                  <LuView className="Sidebar-icons" />
                  View Complaints
                </li>
              </NavLink>
              <NavLink to="/customer/complaint/page/settings">
                <li className="Sidebar-list-icons">
                  <IoSettings className="Sidebar-icons" />
                  Settings
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
};

export default CustomerServices;
