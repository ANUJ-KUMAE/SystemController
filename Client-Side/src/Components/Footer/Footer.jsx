import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaInstagramSquare,
  FaFacebook,
  FaGooglePlus,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="Footer-Container">
        <div className="footer-information">
          {/* Contacts Info */}
          <div className="footer-Contacts-info">
            <h4>Contact Us</h4>
            <div>
              <p>System Controller HQ</p>
              <p>123 Industry Road, Bengaluru, India</p>
            </div>
            <div>
              <p>support@systemcontroller.com</p>
              <p>+91 7625945362</p>
            </div>
            <div className="social-media-contacts">
              <ul>
                <li>
                  <NavLink>
                    <FaInstagramSquare className="social-media-icons" style={{color:"#ee2a7b"}}/>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaFacebook className="social-media-icons" style={{color:"#3b5998"}}/>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaGooglePlus className="social-media-icons" style={{color:"yellow"}}/>
                  </NavLink>
                </li>
                <li>
                  <NavLink>
                    <FaTwitter className="social-media-icons" style={{color:"#1da1f2"}}/>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer-Contacts-info">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/electricians">Electricians</NavLink>
              </li>
              <li>
                <NavLink to="/complaints">Customer Complaints</NavLink>
              </li>
              <li>
                <NavLink to="/terms">Terms & Conditions</NavLink>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="footer-Contacts-info">
            <h4>Newsletter</h4>
            <p>
              Subscribe to our newsletter for updates on new features and more.
            </p>
            <div className="message-box">
              <div className="message-box-button">
                <input type="email" placeholder="Your Email" />
                <button>
                  <IoIosSend className="social-media-icons" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} System Controller. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;
