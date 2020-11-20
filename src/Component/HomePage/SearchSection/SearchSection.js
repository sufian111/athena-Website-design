import React from "react";
import "./SearchSection.css";
const SearchSection = () => {
  return (
    <div className="m-5  text-center">
      <div className="m-5">
        <h1 className="title ">
          <strong>Get your design right, right now</strong>
        </h1>
        <p>Be the first know our latest offers and updates!</p>
      </div>
      <div className="m-2 text-center">
        <input className="inputSearch text-center" type="text" />
        <button className="btnSearch">Search</button>
      </div>
    </div>
  );
};

export default SearchSection;
