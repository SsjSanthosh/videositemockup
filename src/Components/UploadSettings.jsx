import React from "react";
import "./UploadSettings.scss";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import DashboardIcon from "@material-ui/icons/Dashboard";
export default function UploadSettings() {
  return (
    <div className="Upload-body Upload-settings">
      <div className="Upload-body-btn-div">
        <button className="btn btn-upload">
          <VideoCallOutlinedIcon className="icons" fontSize="large" />
          <span>Upload a new video</span>
        </button>
        <button className="btn btn-upload">
          <SettingsIcon fontSize="large" />
          <span>Upload settings</span>
        </button>
        <button className="btn btn-upload">
          <DashboardIcon fontSize="large" />
          <span>Your account stats</span>
        </button>
      </div>
    </div>
  );
}
