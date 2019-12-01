import React from "react";
import UploadSettings from "./UploadSettings";
import "./UploaderContent.scss";

import UploadVideos from "./UploadVideos";
import { Hidden } from "@material-ui/core";
export default function UploaderContent() {
  return (
    <div className="Upload-Container">
      <UploadSettings />
      <Hidden smDown>
        <UploadVideos />
      </Hidden>
    </div>
  );
}
