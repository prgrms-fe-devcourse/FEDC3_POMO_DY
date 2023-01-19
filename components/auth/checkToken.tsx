import { axiosInstance } from 'api';
import { setToken } from 'api';
import { deleteLocalstorage, setLocalstorage } from './localstorage';
import { TokenTypes } from './types';

export const checkToken = async (token: TokenTypes) => {
  try {
    const response = await axiosInstance.post('/api/authUser', token);
    if (response.status === 200) {
      const id: string = response.data._id;
      setToken(token);
      setLocalstorage('ID', id);
    }
  } catch (error) {
    console.log(error, '옳바르지 않은 토큰입니다.');
    deleteLocalstorage('JWT_TOKEN');
  }
};
