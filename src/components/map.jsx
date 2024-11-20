import React from "react";
import "./map.css";
const Map = () => {
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
                <p>서울역</p>
                <img
                    className="station1"
                    src="/images/Double arrow.svg"
                    alt="서울역"
                    style={{ width: "20px", height: "18px" }}
                />
                <p>동서울 터미널</p>
            </div>
            <div className="details">
                <p>₩ 100,000</p>
                <p className="VerticalBar"> | </p>
                <p>1 days</p>
            </div>
        </div>
    );
};

export default Map;
