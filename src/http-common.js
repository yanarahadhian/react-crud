import axios from "axios";

export default axios.create({
  baseURL: "https://nodejsmysql-295308.uc.r.appspot.com/api",
  // baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});