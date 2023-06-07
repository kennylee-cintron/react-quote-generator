import axios from "axios";
export default axios.create({
  baseURL: "https://server-message-board.onrender.com/post",
  headers: {
    "Content-type": "application/json",
  },
});
