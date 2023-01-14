import Profile from '@components/profile/index';

export default function MyProfile() {
  const userId = '임시이름';

  return (
    <>
      <Profile userId={userId} isMyInfo={true} />
    </>
  );
}
