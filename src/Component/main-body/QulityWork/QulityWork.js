import React, { useState } from "react";
import { work } from "../../../Data/WorkData/workData";
import AllHeadContent from "../AllHeadContent/AllHeadContent";
import ButtonCom from "./ButtonCom/ButtonCom";
import ImgWork from "./ImgWork/ImgWork";
import "./QulityWork.css";

const allCatValues = [
  "all",
  ...new Set(work.map((item) => item.category)),
  "others",
];
// console.log(work);

const QulityWork = () => {
  const [data, setData] = useState(work);

  const filterItem = (category) => {
    if (category === "all") {
      setData(work);
      return;
    }
    if (category === "others") {
      setData([work[3], work[5]]);
      return;
    }
    setData(
      work.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <section className="qulity-work-section">
      <div className="container">
        <div className="qulity-work">
          <AllHeadContent
            title="Check Our Quality Work"
            desc=" Dynamically pursue reliable convergence rather than 24/7 process
              improvements develop end-to-end customer service."
          />

          <div className="all-qulity-work">
            <ButtonCom filterItem={filterItem} allCatValues={allCatValues} />
            <ImgWork data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QulityWork;
