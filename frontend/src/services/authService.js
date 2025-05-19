// frontend/src/services/authService.js
import api from './api';

export const loginScout = async (credentials) => {
  try {
    const response = await api.post('/scouts/login', credentials);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Login failed' };
  }
};

export const registerScout = async (scoutData) => {
  try {
    const response = await api.post('/scouts/register', scoutData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Registration failed' };
  }
};

export const logoutScout = async () => {
  try {
    const response = await api.post('/auth/logout');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Logout failed' };
  }
};