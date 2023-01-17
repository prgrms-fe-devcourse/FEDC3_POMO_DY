import { axiosInstance } from 'api';
import { setToken } from 'api';
import { deleteLocalstorage } from './localstorage';

export const checkToken = async (token: string) => {
  try {
    const response = await axiosInstance.post('/api/authUser', token);
    if (response.status === 200) {
      setToken(token);
    }
  } catch (error) {
    console.log(error, '옳바르지 않은 토큰입니다.');
    deleteLocalstorage('JWT_TOKEN');
  }
};
