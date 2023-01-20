import { setToken, axiosInstance } from 'api/index';
import { setLocalstorage } from '@components/auth/localstorage';
import { LoginApiProps } from './types';

export const LoginApi = async ({ email, password, router }: LoginApiProps) => {
  try {
    const response = await axiosInstance.post('api/login', {
      email,
      password,
    });
    if (response.status === 200) {
      const token: string = response.data.token;
      const id: string = response.data._id;
      setLocalstorage('JWT_TOKEN', token);
      setLocalstorage('ID', id);
      setToken(token);
      router.replace('/');
    }
  } catch (error) {
    console.log(error);
    alert('이메일 혹은 패스워드가 옳지 않습니다.');
  }
};
