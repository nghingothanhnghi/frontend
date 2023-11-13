import axios from "axios";

export default axios.create({
  baseURL: "http://api.chuotgreen.com/api/",
  headers: {
    "Content-type": "application/json"
  }
});
