import React from "react";
import Footer from "../Footer/Footer";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import "./Contact.css"

const Contact = () => {
  return (
    <div>
      <>
        <section>
          <div className="Contact-Container">
            <div className="contact-view-image">
              <p>LUXURY HOTEL EXPERIENCE</p>
              <h3>CONTACT US</h3>
            </div>
          </div>
        </section>
        <section>
          <div className="Customers-User-contacts">
            <div className="Get-In-Touch-Container">
              <div className="Touch-heading">
                <h3>Get In Touch</h3>
              </div>
              <form>
                <div className="Touch-Input">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="Touch-Input">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="Touch-Input">
                  <input type="number" placeholder="Phone" />
                </div>
                <div className="Touch-textarea">
                  <textarea
                    placeholder="Message"
                    rows={10}
                    cols={20}
                  ></textarea>
                </div>
                <div>
                  <button className="search-button">Submit</button>
                </div>
              </form>
            </div>
            <div className="Contact-info-details">
              <div className="office-details">
                <div className="Detail-Info-Logo">
                  <FaLocationDot className="office-location" />
                </div>
                <div className="office-textdata">
                  <h5>OFFICE LOCATION</h5>
                  <p>Baker Street 852, India</p>
                </div>
              </div>
              <div className="office-details">
                <div className="Detail-Info-Logo">
                  <MdEmail className="office-location" />
                </div>
                <div className="office-textdata">
                  <h5>EMAIL</h5>
                  <p>management@gmail.com</p>
                </div>
              </div>
              <div className="office-details">
                <div className="Detail-Info-Logo">
                  <FaPhone className="office-location" />
                </div>
                <div className="office-textdata">
                  <h5>PHONE</h5>
                  <p>7625945362</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </>
    </div>
  );
};

export default Contact;
