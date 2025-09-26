import axios from "axios";

export const BASE_URL = 'http://localhost:8080/api/v1';


export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const setToken = () => {
  const storedData = localStorage.getItem("token");

  if (!storedData) {
    console.warn("No auth data found in localStorage");
    return;
  }

  try {
    const parsed = JSON.parse(storedData);
    if (parsed?.token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${parsed.token}`;
    } else {
      console.warn("No token found in stored data");
    }
  } catch (err) {
    console.error("Failed to parse stored data:", err);
  }
};

export default api;
