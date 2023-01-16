import { axiosInstance } from 'api';
import { setLocalstorage } from './localstorage';

export const Auth = async ({ token }: any) => {
  setLocalstorage('JWT_TOKEN', token);
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
