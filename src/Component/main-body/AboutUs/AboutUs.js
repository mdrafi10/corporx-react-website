import React from "react";
import { aboutus } from "../../../Data/AboutUs/AboutData";
import AllHeadContent from "../AllHeadContent/AllHeadContent";
import AboutCard from "./AbotCard/AboutCard";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-section-head">
          <AllHeadContent
            title="What Clients Say About Us"
            desc='Rapidiously morph transparent internal or "organic" sources whereas resource sucking e-business innovate compelling internal.'
          />

          <AboutCard aboutus={aboutus} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
