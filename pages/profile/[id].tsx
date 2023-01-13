import { useRouter } from 'next/router';

export default function UserProfile() {
  const router = useRouter();
  const userId = router.query.id;

  return (
    <>
      <div>유저 프로필 유저정보 : {userId} </div>
    </>
  );
}
