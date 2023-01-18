import ProfileImg from '@public/icons/profile.svg';
import styled from '@emotion/styled';
import { getFullName } from './getFullName';
import { useQuery } from 'react-query';
import Link from 'next/link';
import { COLORS } from 'styles/colors';

export const LikeItem = ({ following, followers, title }) => {
  let id = '';

  if (title === 'following') {
    id = following;
  } else {
    id = followers;
  }

  const onDeleteHandler = () => {
    console.log(data.followers[0]._id);
  };

  const { status, data } = useQuery(id, () => getFullName(id));

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  console.log(data.followers, data.fullName);

  return (
    <UserBox>
      <LikeUser href={`/profile/${id}`}>
        {data && <ProfileImg />}
        {data && <LikeUserName>{data?.fullName}</LikeUserName>}
      </LikeUser>
      {data && <DeleteButton onClick={onDeleteHandler}>삭제하기</DeleteButton>}
    </UserBox>
  );
};

const UserBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LikeUser = styled(Link)`
  display: flex;
  text-decoration-line: none;
  color: black;
  justify-content: space-between;
`;

const LikeUserName = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
`;

const DeleteButton = styled.button`
  width: 100px;
  height: 50px;
  background: ${COLORS.main};
  font-weight: 600;
  font-size: 20px;
  line-height: 10px;
  text-align: center;
  color: white;
  border: none;
  border-radius: 25px;
  border-color: ${COLORS.main};
`;
