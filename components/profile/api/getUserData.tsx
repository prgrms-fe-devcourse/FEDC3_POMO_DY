import { getLocalstorage } from '@components/auth/localstorage';
import { publicApi } from 'api';
import { getId } from './getId';

export const getUserData = async () => {
  try {
    const token = getLocalstorage('JWT_TOKEN');
    const id = await getId(token);
    const response = await publicApi.get(`/users/${id}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
