import React from "react";
import "./Home.css";
import Data from "../../SampleData/Data";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <section>
        <div className="home-container">
          <div className="home-container-header">
            <div className="home-search-section">
              <h2>Welcome to the System Controller</h2>
              <p>
                Efficiently manage electricians and handle customer complaints
                in one unified platform.
              </p>
              <div className="explore-button-section">
                <button className="explore-button">Explore IT</button>
              </div>
            </div>
            <div className="Home-section-details-part">
              <div style={{ color: "black" }}>
                <h3>Our Services</h3>
                <p>
                  Explore a wide range of services to efficiently manage your
                  operations.
                </p>
              </div>
              <div className="all-services-lists">
                {Data &&
                  Data.map((curElem, index) => {
                    return (
                      <div className="services-data" key={index}>
                        <figure>
                          <img
                            src={curElem.image}
                            alt="Services"
                            className="service-img"
                          />
                        </figure>
                        <div>
                          <p>{curElem.Service}</p>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
