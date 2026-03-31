import axios from "axios";

// Main API connection

const Api = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true
});


Api.interceptors.request.use((config) => {
  return config;
});

export default Api;
