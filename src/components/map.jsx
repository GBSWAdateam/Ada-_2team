import React from "react";
import "./map.css";

const Map = ({ start, end, money, day }) => {
  return (
    <div className="RecentPath">
      <div className="button">
        <div className="delete-button">
          <img
            src="/images/delbut.svg"
            alt="Delete button"
            className="image-button"
          />
        </div>
        <img
          src="/images/Learn morebut.svg"
          alt="Learn more button"
          className="learn-more-button"
        />
      </div>
      <div className="text">
        <p>{start}</p>
        <img
          className="station1"
          src="/images/Double arrow.svg"
          alt="서울역"
          style={{ width: "20px", height: "18px" }}
        />
        <p>{end}</p>
      </div>
      <div className="details">
        <p>₩ {money}</p>
        <p className="VerticalBar"> | </p>
        <p>{day} days</p>
      </div>
    </div>
  );
};

export default Map;
