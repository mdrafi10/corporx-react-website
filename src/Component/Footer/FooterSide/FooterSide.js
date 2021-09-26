import React from "react";

const FooterSide = ({ title, li1, li2, li3, li4 }) => {
  return (
    <div className="company">
      <h1>{title}</h1>
      <ul>
        <li>{li1}</li>
        <li>{li2}</li>
        <li>{li3}</li>
        <li>{li4}</li>
      </ul>
    </div>
  );
};

export default FooterSide;
