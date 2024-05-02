import axios from "axios";

const api = axios.create({
  baseURL: "https://faithfund-beta.onrender.com/",
});

export default api;
