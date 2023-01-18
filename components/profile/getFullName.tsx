import { axiosInstance } from 'api';

export const getFullName = async (user: string | null | undefined) => {
  try {
    const response = await axiosInstance.get(`/api/users/${user}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }
};
