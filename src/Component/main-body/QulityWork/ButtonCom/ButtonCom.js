import React from "react";

const ButtonCom = ({ filterItem, allCatValues }) => {
  return (
    <div className="work-btn-container">
      {allCatValues.map((item, index) => {
        return (
          <button
            className="btn-item"
            key={index}
            onClick={() => filterItem(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonCom;
