import React from "react";
import "./HeroComponent.css"; // You should create a CSS file for your styles

const HeroUnit = () => {
  return (
    <>
      {/* <div className="hero-unit">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="hero-heading">Credit Pulse</h1>
              <p className="hero-subheading">
                Your Gateway to financial freedom
              </p>
              <p className="hero-subheading2">
                Finances made easier just for you
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div class="text-center bg-image Hero-start">
        <div class="mask">
          <div class="d-flex justify-content-center align-items-center insidemask">
            <div class="text-white justify-content-center align-items-center">
              <h1 class="mb-3 mymb" style={{ fontSize: "4.5rem" }}>
                Welcome To Credit Pulse
              </h1>
              <div className="catchy-text">
                <p className="Insidetext">Your Gateway to financial freedom</p>
                <p>Finances made easier just for you</p>
              </div>

              {/* <button
                type="button"
                class="btn btn-secondary"
                style={{ backgroundColor: "#5a287d" }}
              >
                Learn More
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroUnit;
