import axios from "axios";

export const http = axios.create({
  baseURL: "http://127.0.0.1:5000",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const https = axios.create({ 
  baseURL: "http://127.0.0.1:5000",
});

https.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete https.defaults.headers.common.Authorization;
    }
    return config;
  },

  (error) => Promise.reject(error)
);
