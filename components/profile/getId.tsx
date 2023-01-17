import { deleteLocalstorage } from '@components/auth/localstorage';
import { axiosInstance } from 'api';

export const getId = async (token: string | null) => {
  try {
    const response = await axiosInstance.post('/api/authUser', token);
    if (response.status === 200) {
      return response.data._id;
    }
  } catch (error) {
    console.log(error, '옳바르지 않은 토큰입니다.');
    deleteLocalstorage('JWT_TOKEN');
  }
};
