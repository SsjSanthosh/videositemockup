import React from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import UploaderContent from "./UploaderContent";
export default function VideoSite() {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <UploaderContent />
    </div>
  );
}
