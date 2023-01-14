import { Auth } from '@components/auth/auth';
import { axiosInstance } from 'api';

export const LoginApi = async ({ email, password, onSuccess }) => {
  try {
    const response = await axiosInstance.post('/login', {
      email,
      password,
    });
    if (response.status === 200) {
      Auth({
        token: response.data.token,
      });
      onSuccess();
    }
  } catch (error) {
    console.log(error);
    alert('이메일 혹은 패스워드가 옳지 않습니다.');
  }
};
