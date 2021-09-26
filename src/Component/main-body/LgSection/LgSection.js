import React from "react";
import "./LgSection.css";
import FastForwardIcon from "@mui/icons-material/FastForward";

const LgSection = () => {
  return (
    <section className="lg-section">
      <div className="container">
        <div className="lg-row ">
          <div className="lg-img-left">
            <div className="fancy-border-radius">
              <div className="color-radius-img">
                <img src="images/about-img/color-shape.svg" alt="svg" />
              </div>
              <img src="images/about-img/about-us-2.jpg" alt="about-img" />
              <div className="dot-image">
                <img src="images/about-img/dot-shape.png" alt="dot" />
              </div>
            </div>
          </div>

          <div className="lg-info-right">
            <div className="lg-content">
              <h1>Total Solutions for Your Business Here</h1>
              <p>
                Interactively develop timely niche markets before extensive
                imperatives. Professionally repurpose strategies.
              </p>
              <ul className="future-list">
                <li>
                  <FastForwardIcon className="arrow_icon" />
                  Creative Websites Design
                </li>
                <li>
                  <FastForwardIcon className="arrow_icon" />
                  Accounting Procedures Guidebook
                </li>
                <li>
                  <FastForwardIcon className="arrow_icon" />
                  Cost Accounting Fundamentals
                </li>
                <li>
                  <FastForwardIcon className="arrow_icon" />
                  Cost Accounting Fundamentals
                </li>
              </ul>
              <button className="btn btn-1">View Services</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LgSection;
