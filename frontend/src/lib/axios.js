import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // send cookies with the request
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if(token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;