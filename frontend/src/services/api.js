import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  withCredentials: true // For cookies if using them
});

// Request interceptor for auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('scoutToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;