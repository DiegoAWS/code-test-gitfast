import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Accept: 'application/vnd.github.inertia-preview+json',
    }
});

export default axiosInstance;