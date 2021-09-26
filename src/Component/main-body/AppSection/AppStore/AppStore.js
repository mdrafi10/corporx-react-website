import React from "react";

const AppStore = ({ icon, text, text1 }) => {
  return (
    <div className="app-store">
      {icon}
      <div className="app-store-info">
        <h2>{text}</h2>
        <h1>{text1}</h1>
      </div>
    </div>
  );
};

export default AppStore;
