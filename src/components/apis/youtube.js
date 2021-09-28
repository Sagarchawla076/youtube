import axios from "axios";
const KEY = "AIzaSyCmKrsKiJSFDrkV6qT4v0m7mVfylE7lTgQ";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
    type: "video",
  },
});
