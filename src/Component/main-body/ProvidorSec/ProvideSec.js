import React from "react";
import AllHeadContent from "../AllHeadContent/AllHeadContent";
import "./ProvideSec.css";
import SingleProvide from "./SingleProvide/SingleProvide";

const ProvideSec = () => {
  return (
    <section className="provide-section">
      <div className="container">
        <div className="providor-service">
          <AllHeadContent
            title="We Provide Quality Services"
            desc="Efficiently aggregate end-to-end core competencies without
              maintainable. Dynamically foster tactical solutions without
              enabled value."
          />

          {/* provide-service-box */}
          <SingleProvide />
        </div>
      </div>
    </section>
  );
};

export default ProvideSec;
