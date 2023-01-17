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

export const setToken = async (token: string) => {
  internalApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  publicApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

// 기존 instance
export { internalApi as axiosInstance };
