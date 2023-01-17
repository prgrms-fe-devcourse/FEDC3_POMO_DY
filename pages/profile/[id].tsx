import { useRouter } from 'next/router';
import Profile from '@components/profile/index';
import { axiosInstance } from 'api';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';

export default function UserProfile() {
  const router = useRouter();
  const [user, setUser] = useState('63c2b8272358f16faf4df0c5');

  useEffect(() => {
    if (!router.isReady) return;
    const userId = router.query.id;
    setUser(String(userId));
  }, [router.isReady]);

  const getData = async () => {
    try {
      const response = await axiosInstance.get(`/api/users/${user}`);
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const { status, data } = useQuery(user, getData);

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
        isMyInfo={false}
      />
    </>
  );
}
