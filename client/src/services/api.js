import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your actual backend URL

// Register a new user
export const registerUser = async (userData) => {
    const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);
    return response.data;
};

// Login user
export const loginUser = async (userData) => {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
    return response.data;
};

// Get logged-in user details
export const getMe = async (token) => {
    const response = await axios.get(`${API_BASE_URL}/auth/me`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

// Get all users (example)
export const getUsers = async () => {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
};
