import { axiosInstance } from 'api';
import { setToken } from 'api';

export const checkToken = async (token: string) => {
  try {
    const response = await axiosInstance.get('/api/authUser', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      setToken(token);
    }
  } catch (error) {
    alert('토큰 정보가 옳바르지 않습니다.');
  }
};
