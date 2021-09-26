import React from "react";
import { providers } from "../../../../Data/ProvideData/provide";

const SingleProvide = () => {
  return (
    <div className="provide-service-box">
      {providers.map((provide) => {
        return (
          <div className="single-provide-service" key={provide.id}>
            <div className="provide-icon">{provide.logo}</div>
            <div className="provide-info">
              <h2>{provide.title}</h2>
              <p>{provide.desc}</p>
              <span className="read-more">
                {provide.read} {provide.icon}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleProvide;
