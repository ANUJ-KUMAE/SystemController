import React from "react";
import CustomerServices from "../CustomerServices";
import service from "../../../Images/service.jpg";
import "../Customer.css"

const CustomerMainPage = () => {
  return (
    <>
      <section className="customer-section">
        <div className="customer-container">
          <div className="customer-services">
            <CustomerServices />
          </div>
          <div className="customer-image">
            <figure className="customer-figure">
              <img src={service} alt="service" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerMainPage;
