import axios from "axios";
export const gitHubApiBaseUrl = 'https://api.github.com'

const axiosInstance = axios.create({
    baseURL: gitHubApiBaseUrl,
    headers: {
        Accept: 'application/vnd.github.inertia-preview+json',
    }
});

export default axiosInstance;