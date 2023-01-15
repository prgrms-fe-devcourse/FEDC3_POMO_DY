import { useRouter } from 'next/router';
import Profile from '@components/profile/index';

export default function UserProfile() {
  const router = useRouter();
  const userId = router.query.id;

  return (
    <>
      <Profile userId={userId} isMyInfo={false} />
    </>
  );
}
