import styled from '@emotion/styled';
import { COLORS } from 'styles/colors';
import PencilSvg from '@public/icons/pencil.svg';
import FollowSvg from '@public/icons/follow.svg';
import ProfileSvg from '@public/icons/profile.svg';

interface userDataType {
  userId: string | string[] | undefined;
  isMyInfo: boolean;
}

export default function Profile({ userId, isMyInfo }: userDataType) {
  return (
    <>
      <Nav>Nav 임시</Nav>
      <Main>
        <InfoContainer>
          <Info>
            <ProfileSvg className="infoIcon" />
            <InfoDetail>
              <InfoUserName>{userId}</InfoUserName>
              {isMyInfo ? <PencilSvg /> : <FollowSvg />}
              <InfoUserEmail>pomo@gmail.com</InfoUserEmail>
            </InfoDetail>
          </Info>
          {isMyInfo && <PasswordChangeButton>비밀번호 변경</PasswordChangeButton>}
        </InfoContainer>
        <LikeContainer>
          <LikeTap>
            <LikeTapItem>팔로워 2명</LikeTapItem>
            <LikeTapItem>팔로잉 10명</LikeTapItem>
          </LikeTap>
          <LikeUser>
            <ProfileSvg />
            <LikeUserName>김규란</LikeUserName>
          </LikeUser>
          <LikeUser>
            <ProfileSvg />
            <LikeUserName>내이름은슈퍼초길지</LikeUserName>
          </LikeUser>
          <LikeUser>
            <ProfileSvg />
            <LikeUserName>라면국물</LikeUserName>
          </LikeUser>
        </LikeContainer>
      </Main>
    </>
  );
}

const Main = styled.div`
  margin-top: 90px;
  height: 100vh;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: flex-start;
`;

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 96px;
  background: ${COLORS.sub_yellow};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
`;

const Info = styled.div`
  display: flex;
  gap: 42px;
  margin-top: 92px;
  margin-left: 130px;
  & > .infoIcon {
    display: block;
    width: 160px;
    height: 160px;
  }
`;

const InfoContainer = styled.div`
  width: 90vw;
  display: flex;
  justify-content: space-between;
`;

const InfoDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 33px;
  gap: 15px;
`;

const InfoUserName = styled.div`
  height: 48px;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
`;

const InfoUserEmail = styled.div`
  height: 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  grid-column: span 2;
`;

const PasswordChangeButton = styled.button`
  margin-top: 138px;
  width: 162px;
  height: 48px;
  background: ${COLORS.main};
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  color: white;
  border: none;
  border-radius: 28px;
  border-color: ${COLORS.main};
`;

const LikeContainer = styled.div`
  display: grid;
  margin-left: 130px;
  margin-top: 125px;
  gap: 25px;
  grid-column: span 2;
`;

const LikeTap = styled.div`
  display: flex;
  gap: 28px;
  margin-bottom: 40px;
`;
const LikeTapItem = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;
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
