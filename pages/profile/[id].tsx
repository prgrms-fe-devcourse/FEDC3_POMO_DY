import { useRouter } from 'next/router';
import Profile from '@components/profile/index';
import { useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import { getFullName } from '@components/profile/api/getFullName';
import { getLocalstorage } from '@components/auth/localstorage';

export default function UserProfile() {
  const id = getLocalstorage('ID');
  const router = useRouter();
  const [user, setUser] = useState(id);

  useEffect(() => {
    if (!router.isReady) return;
    const userId = router.query.id;
    if (userId === getLocalstorage('ID')) {
      router.replace('/profile');
    }
    setUser(String(userId));
  }, [router]);

  const { status, data } = useQuery([user], () => getFullName(user));

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
        isMyInfo={false}
      />
    </>
  );
}
