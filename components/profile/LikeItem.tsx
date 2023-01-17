import ProfileImg from '@public/icons/profile.svg';
import styled from '@emotion/styled';
import { getFullName } from './getFullName';
import { useQuery } from 'react-query';

export const LikeItem = ({ id }) => {
  const { status, data } = useQuery(id, () => getFullName(id));

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  return (
    <LikeUser>
      {data && <ProfileImg />}
      {data && <LikeUserName>{data?.fullName}</LikeUserName>}
    </LikeUser>
  );
};

const LikeUser = styled.div`
  display: flex;
`;
const LikeUserName = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
`;
