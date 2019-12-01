import React from "react";
import "./Subvideos.scss";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
export default function Subvideos({ title, src, desc }) {
  return (
    <div className="Subvideo">
      <div className="Subvideo-img">
        <img src={src} />
      </div>
      <div className="Subvideo-text">
        <p className="Subvideo-title">{title}</p>

        <p className="Subvideo-text">{desc}</p>
        <div className="Subvideo-btn-div">
          <button className="vid-btn watch">
            <WatchLaterIcon />
            Watch Later
          </button>
          <button className="vid-btn sub">
            <SubscriptionsIcon />
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
