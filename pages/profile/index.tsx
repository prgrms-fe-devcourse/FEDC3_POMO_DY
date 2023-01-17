import Profile from '@components/profile/index';
import { axiosInstance } from 'api';
import { useQuery } from 'react-query';

export default function MyProfile() {
  // 로그인 API 추가 후 Local에서 jwt_token 가져와서 본인 id 찾기
  const dummyId = '63b7b3fd239994226ba878f4';
  const getData = async () => {
    try {
      const response = await axiosInstance.get(`/users/${dummyId}`);
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
