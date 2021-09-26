import React from "react";
import "./SectionHeader.css";

const SectionHeader = () => {
  return (
    <section className="section-header">
      <div className="section-header-img">
        <img src="images/bg-img/hero-bg10.jpg" alt="hero-bg" />
      </div>
      <div className="container">
        <div className="section-flex">
          <div className="section-info">
            <h2>BUSINESS SOLUTIONS</h2>
            <h1>Your Most Trusted Business Partner</h1>
            <p>
              Holisticly procrastinate mission-critical convergence with
              reliable customer service. Assertively underwhelm idea-sharing for
              impactful solutions.
            </p>
            <div className="btn-cl">
              <button className="btn">Get Start Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
