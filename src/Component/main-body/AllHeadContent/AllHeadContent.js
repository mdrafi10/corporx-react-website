import React from "react";
import "./AllHeadContent.css";

const AllHeadContent = ({ title, desc }) => {
  return (
    <div className="head-content">
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default AllHeadContent;
