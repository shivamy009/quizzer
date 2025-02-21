// import axios from 'axios';

// const axiosInstance = axios.create({
//     headers: {
//          Authorization : `Bearer ${localStorage.getItem('token')}`
//     }
// });

// export default axiosInstance;


import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL, // Set base URL for API calls
});

// Add Authorization token dynamically before each request
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
