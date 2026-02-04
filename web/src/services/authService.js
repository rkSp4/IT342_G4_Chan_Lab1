import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080/api/auth';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authService = {
  // Register new user
  async register(username, email, password) {
    try {
      const response = await api.post('/register', {
        username,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Registration failed');
    }
  },

  // Login user
  async login(email, password) {
    try {
      const response = await api.post('/login', {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  // Get current user profile
  async getCurrentUser() {
    try {
      const response = await api.get('/profile');
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to get user profile');
    }
  },

  // Logout user
  async logout() {
    try {
      await api.post('/logout');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      localStorage.removeItem('token');
    }
  },

  // Verify token
  async verifyToken() {
    try {
      const response = await api.get('/verify');
      return response.data;
    } catch (error) {
      throw new Error('Token verification failed');
    }
  },
};