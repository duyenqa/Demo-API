import axiosClient from './axiosClient.js';

export async function registerUser(userData) {
    try {
        const response = await axiosClient.post('/api/register', userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}

