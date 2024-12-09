import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000', //Base URL for the API
    timeout: 10000, //Optional: Set a timeout for requests
});

export default api;