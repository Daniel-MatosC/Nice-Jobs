import axios from "axios";

const api = axios.create({
  baseURL: "https://server-nice-jobs.herokuapp.com",
  timeout: 5000,
});

export default api;
