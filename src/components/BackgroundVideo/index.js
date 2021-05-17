import React from 'react'
import "./style.css";
import video from "../../../public/videos/video.mp4";

function BackgroundVideo() {
  return (
    <div className="video-container">
      <video role="video" src={video} autoPlay loop muted/>
    </div>
  )
}

export default BackgroundVideo;