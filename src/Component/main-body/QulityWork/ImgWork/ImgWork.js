import React from "react";

const ImgWork = ({ data }) => {
  return (
    <div className="qulity-worker-img">
      {data.map((worker) => {
        const { id, bgImg, title, titleInfo } = worker;
        return (
          <div className="single-qulite-worker" key={id}>
            <div className="work-content"></div>
            <img src={bgImg} alt="work" />
            <div className="content-details">
              <h5>{title}</h5>
              <p>{titleInfo}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImgWork;
