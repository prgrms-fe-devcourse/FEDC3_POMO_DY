import styled from '@emotion/styled';
import { COLORS } from 'styles/colors';
import PencilImg from '@public/icons/pencil.svg';
import FollowImg from '@public/icons/follow.svg';
import ProfileImg from '@public/icons/profile.svg';

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
            <ProfileImg className="infoIcon" />
            <InfoDetail>
              <InfoUserName>{userId}</InfoUserName>
              {isMyInfo ? <PencilImg /> : <FollowImg />}
              <InfoUserEmail>pomo@gmail.com</InfoUserEmail>
            </InfoDetail>
          </Info>
          {isMyInfo && <PasswordChangeButton>비밀번호 변경</PasswordChangeButton>}
        </InfoContainer>
        <LikeContainer>
          <LikeBox>
            <LikeHeader>
              <LikeTitle>팔로잉</LikeTitle>
              <LikeSubTitle>2명</LikeSubTitle>
            </LikeHeader>
            <Division />
            <LikeUser>
              <ProfileImg />
              <LikeUserName>내이름은슈퍼초길지</LikeUserName>
            </LikeUser>
            <LikeUser>
              <ProfileImg />
              <LikeUserName>김규란</LikeUserName>
            </LikeUser>
          </LikeBox>
          <LikeBox>
            <LikeHeader>
              <LikeTitle>팔로워</LikeTitle>
              <LikeSubTitle>10명</LikeSubTitle>
            </LikeHeader>
            <Division />
            <LikeUser>
              <ProfileImg />
              <LikeUserName>내이름은슈퍼초길지</LikeUserName>
            </LikeUser>
            <LikeUser>
              <ProfileImg />
              <LikeUserName>김규란</LikeUserName>
            </LikeUser>
          </LikeBox>
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
  display: flex;
  margin-left: 160px;
  margin-top: 80px;
  gap: 70px;
  grid-column: span 2;
`;

const LikeBox = styled.div`
  width: 530px;
  height: 480px;
  box-shadow: 2px 3px 9px 3px rgba(83, 83, 83, 0.25);
  border-radius: 20px;
  padding: 32px;
  display: grid;
  align-content: flex-start;
  gap: 20px;
  grid-column: span 2;
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

const LikeHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 60px;
`;
const LikeTitle = styled.h3`
  font-weight: 600;
  font-size: 35px;
  line-height: 5px;
  color: #000000;
`;
const LikeSubTitle = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`;

const Division = styled.div`
  width: 460px;
  border: 1px solid #000000;
  margin-bottom: 10px;
`;
