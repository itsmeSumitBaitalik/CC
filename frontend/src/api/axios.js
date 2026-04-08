import axios from "axios";
import { toast } from "react-toastify";

// Main API connection

const Api = axios.create({
  baseURL: "http://localhost:5000/api/",
  headers: { "Content-Type": "application/json" },
  withCredentials: true
});

Api.interceptors.request.use((config) => {
  return config;
});

// Global response interceptor for error handling
Api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Check if the error is from an API response
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data?.message || "An error occurred";

      // Handle specific global errors (unauthorized, token expired, etc.)
      if (status === 401) {
        toast.error(`Unauthorized: ${message}`);
        // Optional: redirect to login if token is expired
        // window.location.href = "/login";
      } else if (status === 403) {
        toast.error(`Forbidden: ${message}`);
      } else if (status >= 500) {
        toast.error(`Server Error: ${message}`);
      }
      // Note: 400 errors are usually handled locally by the components (e.g. LoginForm, SignupForm)
    } else {
      // Network error or other issues
      toast.error("Network error. Please check your connection.");
    }
    return Promise.reject(error);
  }
);

export default Api;
