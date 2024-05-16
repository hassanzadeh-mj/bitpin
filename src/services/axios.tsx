import axios from 'axios';
import env from "../env";

const axiosClient = axios.create();

axiosClient.defaults.baseURL = env.API_BASE_URL;


export default axiosClient;
