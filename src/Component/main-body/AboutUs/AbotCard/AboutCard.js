import React from "react";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import StarIcon from "@mui/icons-material/Star";

const AboutCard = ({ aboutus }) => {
  return (
    <div className="about-section-card">
      {aboutus.map((about) => {
        const { id, img, name, desc, profession } = about;
        return (
          <div className="about-single-card" key={id}>
            <FormatQuoteIcon />
            <p>{desc}</p>
            <div className="clint-profile-rating">
              <div className="clint-img-info">
                <img src={img} alt="client-img" />
                <div className="clint-info">
                  <h2>{name}</h2>
                  <h3>{profession}</h3>
                </div>
              </div>
              <div className="clint-reating">
                <h2>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </h2>
                <h3>5.0 Out of 5</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AboutCard;
