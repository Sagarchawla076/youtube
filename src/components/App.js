import React from "react";
import SearchBar from "./SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { response: [], selectedVideo: null };
  componentDidMount() {
    this.onSearchSubmit("buildings");
  }
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      param: {
        q: term,
      },
    });
    this.setState({
      response: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                response={this.state.response}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
