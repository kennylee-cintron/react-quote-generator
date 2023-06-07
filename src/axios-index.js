import axios from "axios";
export default axios.create({
  baseURL: "https://server-message-board.onrender.com",
  headers: {
    "Content-type": "application/json",
  },
});
