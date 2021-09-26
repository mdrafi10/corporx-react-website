import React from "react";
import AllHeadContent from "../AllHeadContent/AllHeadContent";
import NewsCard from "./NewsCard/NewsCard";
import "./NewsSection.css";
import { news } from "../../../Data/NewsData/NewsData";

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="container">
        <div className="news-section-head">
          <AllHeadContent
            title="Our Latest News"
            desc=" Dynamically pursue reliable convergence rather than 24/7 process
              improvements develop end-to-end customer service."
          />

          <NewsCard news={news} />
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
