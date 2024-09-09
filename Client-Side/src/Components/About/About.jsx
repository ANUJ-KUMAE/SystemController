import React from "react";
import Footer from "../Footer/Footer";
import Electr from "../../Images/Electr.jpeg";
import Electrician from "../../Images/Electrician.jpeg";
import Plumber from "../../Images/Plumber.jpeg";
import Carpenter from "../../Images/Carpenter.jpeg";
import "./About.css";

const About = () => {
  return (
    <>
      <section className="about-container">
        <div className="about-header">
          <h2>About System Controller</h2>
          <p>
            The System Controller web application is a comprehensive platform
            designed to streamline the management of electricians and handle
            customer complaints efficiently. With an intuitive interface and a
            powerful backend, we aim to provide an all-in-one solution for
            service providers and customers alike.
          </p>
        </div>
        <div className="about-images-container">
          <img src={Electrician} alt="Electrician" className="about-image" />
          <img src={Plumber} alt="Plumber" className="about-image" />
          <img src={Carpenter} alt="Carpenter" className="about-image" />
        </div>

        <div className="about-features">
          <h2>Key Features</h2>
          <ul>
            <li>
              <strong>Electrician Management:</strong> Add, delete, and manage
              electricians with ease. Keep track of contact information and
              assignments.
            </li>
            <li>
              <strong>Customer Complaint Management:</strong> Efficiently log
              customer complaints by category, track status, and assign
              electricians.
            </li>
            <li>
              <strong>Round-Robin Assignment:</strong> Automatically assign
              electricians to customer complaints using a round-robin method to
              ensure fair distribution of work.
            </li>
            <li>
              <strong>Electrician Dashboard:</strong> Provide electricians with
              a user-friendly dashboard to manage their assigned complaints and
              update statuses.
            </li>
            <li>
              <strong>Performance Tracking:</strong> Track the number of
              complaints resolved by each electrician to monitor performance.
            </li>
          </ul>
        </div>

        <div className="about-benefits">
          <div className="about-benefits-discription">
            <h2>Why Choose System Controller?</h2>
            <p>
              System Controller makes it easy to manage service requests and
              assignments, reducing the administrative burden and improving
              operational efficiency. By automating key processes like complaint
              assignment and tracking, our solution enables faster response
              times and better customer satisfaction.
            </p>
          </div>

          <div className="about-image-section">
            <img src={Electr} alt="Electrician at work" />
            <figcaption>
              Streamline electrician management with ease.
            </figcaption>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
