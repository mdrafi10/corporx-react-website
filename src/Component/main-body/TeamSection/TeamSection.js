import React from "react";
import AllHeadContent from "../AllHeadContent/AllHeadContent";
import "./TeamSection.css";
import TeamCard from "./TeamCard/TeamCard";

const TeamSection = () => {
  return (
    <section className="team-section">
      <div className="container">
        <div className="team-section-head">
          <AllHeadContent
            title="Our Team"
            desc="Dynamically pursue reliable convergence rather than 24/7 process improvements develop end-to-end customer service."
          />

          <div className="team-card-section">
            <TeamCard img="images/team-img/team-6.jpg" name="John Q. Public" />
            <TeamCard
              img="images/team-img/team-1.jpg"
              name="Madurai Mani Iyer"
            />
            <TeamCard img="images/team-img/team-4.jpg" name="Maria J. Go" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
