import { useRouter } from 'next/router';
import Profile from '@components/profile/index';
import { axiosInstance } from 'api';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { getFullName } from '@components/profile/getFullName';

export default function UserProfile() {
  const router = useRouter();
  const [user, setUser] = useState('63c2b8272358f16faf4df0c5');

  useEffect(() => {
    if (!router.isReady) return;
    const userId = router.query.id;
    setUser(String(userId));
  }, [router.isReady]);

  const { status, data } = useQuery(user, () => getFullName(user));

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
