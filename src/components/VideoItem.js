import React from "react";
import "./VideoItem.css";
class VideoItem extends React.Component {
  render() {
    const { title, thumbnails } = this.props.video.snippet;
    return (
      <div
        className="item video-item"
        onClick={() => this.props.onVideoSelect(this.props.video)}
      >
        <img src={thumbnails.medium.url} alt={title} className="ui  image" />
        <div className="content">
          <div className="header">{title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
