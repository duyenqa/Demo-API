import axiosClient from './axiosClient.js'; 

export async function loginUser(userData) {
    try {
        const response = await axiosClient.post('/api/login', userData);
        return response.data;
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
}

