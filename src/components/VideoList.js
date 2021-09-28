import React from "react";
import VideoItem from "./VideoItem";
class VideoList extends React.Component {
  renderList() {
    const list = this.props.response;

    const video = list.map((item, i) => {
      return (
        <VideoItem
          key={i}
          video={item}
          onVideoSelect={this.props.onVideoSelect}
        />
      );
    });

    return video;
  }
  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

export default VideoList;
