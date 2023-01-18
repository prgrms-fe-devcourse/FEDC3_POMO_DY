import { getLocalstorage } from '@components/auth/localstorage';
import { getId } from '@components/profile/getId';
import Profile from '@components/profile/index';
import { publicApi } from 'api';
import { useQuery } from 'react-query';

export default function MyProfile() {
  const getData = async () => {
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

  const { status, data } = useQuery('myData', getData);

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Profile
        followers={data.followers}
        following={data.following}
        email={data.email}
        userName={data.fullName}
        isMyInfo={true}
      />
    </>
  );
}
