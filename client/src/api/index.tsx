import axios from "axios";

export const http = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

export const https = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: `Bearer  + ${localStorage.getItem("jwt")}`,
  },
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
