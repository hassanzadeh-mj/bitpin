import axios from 'axios';
import env from "../env";

const axiosActivesClient = axios.create();

axiosActivesClient.defaults.baseURL = env.API_BASE_URL_Actives;


export default axiosActivesClient;
