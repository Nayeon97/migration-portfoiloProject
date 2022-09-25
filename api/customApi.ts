import axios, { AxiosInstance } from 'axios';

const backendPortNumber = '5001';
const serverUrl = 'http://' + 'localhost' + ':' + backendPortNumber + '/';

export const Axios: AxiosInstance = axios.create({
  baseURL: `${serverUrl}`,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

Axios.interceptors.request.use(async (config) => {
  const accessToken = sessionStorage.getItem('userToken');
  if (config && accessToken) {
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  }
  return config;
});

Axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error.response.data);
  }
);
