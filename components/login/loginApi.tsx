import { setToken, axiosInstance } from 'api/index';
import { setLocalstorage } from '@components/auth/localstorage';

interface loginApiProps {
  email: string;
  password: string;
  onSuccess: () => void;
}

export const LoginApi = async ({ email, password, onSuccess }: loginApiProps) => {
  try {
    const response = await axiosInstance.post('api/login', {
      email,
      password,
    });
    if (response.status === 200) {
      const token: string = response.data.token;
      setLocalstorage('JWT_TOKEN', token);
      setToken(token);
      onSuccess();
    }
  } catch (error) {
    console.log(error);
    alert('이메일 혹은 패스워드가 옳지 않습니다.');
  }
};
