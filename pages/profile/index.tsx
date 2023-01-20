import { getUserData } from '@components/profile/api/getUserData';
import { useQuery } from 'react-query';
import Profile from '@components/profile/index';

export default function MyProfile() {
  const { status, data } = useQuery('myData', getUserData);

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  return (
    <>
      <Profile
        followers={data?.followers}
        following={data?.following}
        email={data?.email}
        userName={data?.fullName}
        isMyInfo={true}
      />
    </>
  );
}
