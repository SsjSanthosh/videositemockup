import React from "react";
import "./Searchbar.scss";
export default function Searchbar() {
  return (
    <div className="Searchbar-div">
      <input
        type="text"
        className="Searchbar-input"
        placeholder="Search videos"
      />
      <button className="Searchbar-btn">Search</button>
    </div>
  );
}
