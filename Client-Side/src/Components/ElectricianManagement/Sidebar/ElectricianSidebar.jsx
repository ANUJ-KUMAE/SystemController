import React from "react";
import { IoPerson } from "react-icons/io5";
import { GrCompliance } from "react-icons/gr";
import { LuView } from "react-icons/lu";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const ElectricianSidebar = () => {
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
              <NavLink to="/Admin/Dashboard/adminCustomers">
                <li className="Sidebar-list-icons">
                  <GrCompliance className="Sidebar-icons" />
                  Customers
                </li>
              </NavLink>
              <NavLink to="/Admin/Dashboard/adminRegisteruser">
                <li className="Sidebar-list-icons">
                  <GrCompliance className="Sidebar-icons" />
                  Add Electrician
                </li>
              </NavLink>
              <NavLink to="/Admin/Dashboard/AdminElectricians">
                <li className="Sidebar-list-icons">
                  <LuView className="Sidebar-icons" />
                  Electrician
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </section>
      <Outlet/>
    </>
  );
};

export default ElectricianSidebar;
