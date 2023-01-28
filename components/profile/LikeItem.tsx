import ProfileImg from '@public/icons/profile.svg';
import styled from '@emotion/styled';
import { getFullName } from './api/getFullName';
import { useQuery } from 'react-query';
import Link from 'next/link';
import { COLORS } from 'styles/colors';
import { getLocalstorage } from '@components/auth/localstorage';
import { publicApi } from 'api';
import { FollowingIdData, Id, LikeItemProps } from './types';
import { useQueryClient } from 'react-query';

export const LikeItem = ({ following, followers, title, isMyInfo }: LikeItemProps) => {
  const queryClient = useQueryClient();
  let id: Id;

  if (title === 'following') {
    id = following;
  } else {
    id = followers;
  }

  const onDeleteHandler = async () => {
    const hostId = getLocalstorage('ID');
    const followingId = data.followers.find((item: FollowingIdData) => item.follower == hostId)._id;
    try {
      const response = await publicApi.delete('/follow/delete', {
        data: {
          id: followingId,
        },
      });
      if (response.status === 200) {
        queryClient.invalidateQueries('myData');
      }
    } catch (error) {
      console.log(error, '팔로잉 삭제 실패');
    }
  };

  const { status, data } = useQuery(id, () => getFullName(id));

  if (status === 'loading') {
    return <span>Loading...</span>;
  }

  return (
    <UserBox>
      <LikeUser href={`/profile/${id}`}>
        {data && <ProfileImg />}
        {data && <LikeUserName>{data?.fullName}</LikeUserName>}
      </LikeUser>
      {title === 'following' && isMyInfo && <DeleteButton onClick={onDeleteHandler}>삭제하기</DeleteButton>}
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
