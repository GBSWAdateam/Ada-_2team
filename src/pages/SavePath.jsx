import "./SavePath.css";
import React from "react";
import Header from "../components/Header";
import Mapitem from "../components/map";
import Search from "../components/Search";
import { useState } from "react";

const map = [
  {
    start: "서울역",
    end: "건형이 집",
    money: "10000",
    day: "1",
  },
  {
    start: "대구역",
    end: "건형이 집",
    money: "20000",
    day: "1",
  },
  {
    start: "민서님 집",
    end: "건형이 집",
    money: "999999999",
    day: "999",
  },
  {
    start: "세훈이 집",
    end: "건형이 집",
    money: "910000",
    day: "2",
  },
  {
    start: "서울역",
    end: "건형이 집",
    money: "10000",
    day: "1",
  },
  {
    start: "대구역",
    end: "건형이 집",
    money: "20000",
    day: "1",
  },
  {
    start: "민서님 집",
    end: "건형이 집",
    money: "999999999",
    day: "999",
  },
  {
    start: "세훈이 집",
    end: "건형이 집",
    money: "910000",
    day: "2",
  },
  {
    start: "서울역",
    end: "건형이 집",
    money: "10000",
    day: "1",
  },
  {
    start: "대구역",
    end: "건형이 집",
    money: "20000",
    day: "1",
  },
  {
    start: "민서님 집",
    end: "건형이 집",
    money: "999999999",
    day: "999",
  },
  {
    start: "세훈이 집",
    end: "건형이 집",
    money: "910000",
    day: "2",
  },
  {
    start: "서울역",
    end: "건형이 집",
    money: "10000",
    day: "1",
  },
  {
    start: "대구역",
    end: "건형이 집",
    money: "20000",
    day: "1",
  },
  {
    start: "민서님 집",
    end: "건형이 집",
    money: "999999999",
    day: "999",
  },
  {
    start: "세훈이 집",
    end: "건형이 집",
    money: "910000",
    day: "2",
  },
  {
    start: "서울역",
    end: "건형이 집",
    money: "10000",
    day: "1",
  },
  {
    start: "대구역",
    end: "건형이 집",
    money: "20000",
    day: "1",
  },
  {
    start: "민서님 집",
    end: "건형이 집",
    money: "999999999",
    day: "999",
  },
  {
    start: "세훈이 집",
    end: "건형이 집",
    money: "910000",
    day: "2",
  },
];

const SavePath = () => {
  const [rjsgudqkr, setrjsgudqkr] = useState("");
  const rjsgud_input = (e) => {
    setrjsgudqkr(e.target.value);
  };

  return (
    <div className="SavePath">
      <Header />

      <Search rjsgud_input={rjsgud_input} />

      <div className="path-grid">
        {map
          .filter(
            (map) =>
              map.start.includes(rjsgudqkr) || map.end.includes(rjsgudqkr)
          )
          .map((map) => (
            <Mapitem
              start={map.start}
              end={map.end}
              money={map.money}
              day={map.day}
            />
          ))}
      </div>
    </div>
  );
};

export default SavePath;
