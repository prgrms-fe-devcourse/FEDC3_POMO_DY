import styled from '@emotion/styled';
import { COLORS } from 'styles/colors';
import PencilImg from '@public/icons/pencil.svg';
import FollowImg from '@public/icons/follow.svg';
import ProfileImg from '@public/icons/profile.svg';
import { LikeList } from './LikeList';
import { UserInfo } from './UserInfo';

interface userDataProps {
  userId: string | string[] | undefined;
  isMyInfo: boolean;
}

export default function Profile({ userId, isMyInfo }: userDataProps) {
  return (
    <>
      <Main>
        <UserInfo isMyInfo={isMyInfo} userId={userId} />
        <LikeContainer>
          <LikeList />
          <LikeList />
        </LikeContainer>
      </Main>
    </>
  );
}

const Main = styled.div`
  margin-top: 96px;
  height: 100vh;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: flex-start;
`;

const LikeContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 80px;
  gap: 70px;
  grid-column: span 2;
`;
