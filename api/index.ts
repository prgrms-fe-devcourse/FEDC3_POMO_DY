import axios, { AxiosInstance } from 'axios';

const setInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.code === 'ECONNABORTED' || error.response?.status === 408) {
        alert('요청이 만료되었습니다.');
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

const options = {
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
  timeout: 10000,
};

export const internalApi = setInterceptor(
  axios.create({
    ...options,
  }),
);

export const publicApi = setInterceptor(
  axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    ...options,
  }),
);

// FIXME: 토큰 관리 로직이 미완이라 넣은 임시 코드
const AUTH_TOKEN = process.env.NEXT_PUBLIC_AUTH_TOKEN;
internalApi.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;
publicApi.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;

// 기존 instance
export { internalApi as axiosInstance };
