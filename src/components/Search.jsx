import { useState } from "react";
import "./search.css";

const Search = ({ rjsgud_input }) => {
  return (
    <div className="searchcontainer">
      <input
        onChange={rjsgud_input}
        type="text"
        className="search_route"
        placeholder="원하는 저장 경로를 검색하세요."
      />
      <button className="search_button">
        <img src="../images/search_goggle.svg" alt="search icon" />
      </button>
    </div>
  );
};

export default Search;
