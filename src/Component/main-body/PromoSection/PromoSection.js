import React from "react";
import { promo } from "../../../Data/promoData/PromoData";
import "./PromoSection.css";

const PromoSection = () => {
  return (
    <section className="promo-section">
      <div className="container">
        <div className="promo-content">
          {promo.map((pro) => {
            return (
              <div className="single-promo-content" key={pro.id}>
                <div className="bg-img">
                  <img src={pro.bgImg} alt="blog-img" />
                </div>
                <div className="info">
                  {pro.logo}
                  <h2>{pro.title}</h2>
                  <p>{pro.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
