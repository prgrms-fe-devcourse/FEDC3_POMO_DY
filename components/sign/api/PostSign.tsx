import { LoginApi } from '@components/login/loginApi';
import { axiosInstance } from 'api';
import { PostSignProps } from '../types';

export const PostSign = async ({ email, fullName, password, router }: PostSignProps) => {
  try {
    const response = await axiosInstance.post('/api/sign', {
      email,
      fullName,
      password,
    });
    if (response.status === 200) {
      LoginApi({
        email,
        password,
        router,
      });
    }
  } catch (error) {
    console.error(error);
  }
};
