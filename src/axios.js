// axiosConfig.js

import axios from 'axios';
import i18n from 'i18next';


const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    config.headers['Accept-Language'] = i18n.language;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
