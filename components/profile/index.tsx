import styled from '@emotion/styled';
import { LikeList } from './LikeList';
import { UserInfo } from './UserInfo';

export default function Profile({ userId, email, userName, isMyInfo }) {
  return (
    <>
      <Main>
        <UserInfo userId={userId} email={email} userName={userName} isMyInfo={isMyInfo} />
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