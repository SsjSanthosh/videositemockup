import React from "react";
import "./UploadVideos.scss";
import InfoIcon from "@material-ui/icons/Info";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
export default function UploadVideos() {
  return (
    <div className="Upload-body Upload-videos">
      <p className="Upload-body-title">
        Your last few uploads
        <hr />
      </p>
      <div className="Upload-body-videos">
        <div className="Upload-video">
          <div className="Upload-video-img">
            <img src="https://gaminghistoria-com.exactdn.com/wp-content/uploads/2018/06/halo2.jpg?strip=all&lossy=1&ssl=1" />
          </div>
          <div className="Upload-video-desc">
            <p className="Upload-video-title">
              How Halo 2 changed gaming forever
              <div className="icon-dock">
                <InfoIcon fontSize="medium" className="uMarginHor" />
              </div>
            </p>
            <p className="Upload-video-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              nihil voluptatem vitae adipisci fugit amet quas dolores neque....
            </p>
          </div>
        </div>

        <div className="Upload-video">
          <div className="Upload-video-img">
            <img src="https://cdn.wccftech.com/wp-content/uploads/2018/07/control-art.jpg" />
          </div>
          <div className="Upload-video-desc">
            <p className="Upload-video-title">
              Why Control is the best video game in years
              <div className="icon-dock">
                <InfoIcon fontSize="medium" className="uMarginHor" />
              </div>
            </p>
            <p className="Upload-video-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
              nihil voluptatem vitae adipisci fugit amet quas dolores neque....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
