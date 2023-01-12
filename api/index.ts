import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
  timeout: 500,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === 'ECONNABORTED' || error.response?.status === 408) {
      alert('요청이 만료되었습니다.');
    }
    return Promise.reject(error);
  },
);
