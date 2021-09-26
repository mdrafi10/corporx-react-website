import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import EventNoteIcon from "@mui/icons-material/EventNote";

const NewsCard = ({ news }) => {
  return (
    <div className="news-section-card">
      {news.map((cur) => {
        const { id, img, proImg, placement, profesion, date, title, desc } =
          cur;
        return (
          <div className="single-card" key={id}>
            <div className="card-img">
              <img src={img} alt="leatest-img" />
            </div>
            <h2>{profesion}</h2>
            <div className="single-card-info">
              <div className="admin-date">
                <div className="admin-profile">
                  <div className="profile-img">
                    <img src={proImg} alt="admin" />
                  </div>
                  <span>{placement}</span>
                </div>
                <span>
                  <EventNoteIcon /> {date}
                </span>
              </div>
              <h1>{title}</h1>
              <p>{desc}</p>
              <span className="read-more">
                Read more
                <KeyboardArrowRightIcon />
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsCard;
