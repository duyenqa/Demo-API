import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://reqres.in',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;