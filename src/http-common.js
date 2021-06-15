import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Access-Control-Allow-Origin" : "",
    "Allow": "GET",
    "Content-type": "application/json"
  }
});
