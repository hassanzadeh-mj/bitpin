import axios from 'axios';
import env from "../env";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = env.API_BASE_URL;
axiosClient.defaults.headers.common["Content-Type"] = 'application/json'
axiosClient.defaults.headers.common["api-version"] = 1

axiosClient.interceptors.request.use(
    config => {
        const deviceId = localStorage.getItem('id');
        if (deviceId)
            config.headers.DeviceId = deviceId
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


export default axiosClient;
