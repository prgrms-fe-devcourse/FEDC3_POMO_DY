import { getLocalstorage } from '@components/auth/localstorage';
import { getId } from '@components/profile/getId';
import Profile from '@components/profile/index';
import { axiosInstance } from 'api';
import { useQuery } from 'react-query';

export default function MyProfile() {
  const getData = async () => {
    try {
      const token = getLocalstorage('JWT_TOKEN');
      const id = await getId(token);
      const response = await axiosInstance.get(`/api/users/${id}`);
      console.log(response);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  };
  const { status, data } = useQuery('myData', getData);

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Profile userId={data._id} email={data.email} userName={data.fullName} isMyInfo={true} />
    </>
  );
}
