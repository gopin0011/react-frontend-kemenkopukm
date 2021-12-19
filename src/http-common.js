import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8000/api",
  headers: {
    // "Access-Control-Allow-Origin":"*",
    // "Access-Control-Allow-Headers":"origin, x-requested-with, content-type",
    // "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    'Accept': 'application/json', 
    'Content-type': 'application/json'
  },
  withCredentials: false
});