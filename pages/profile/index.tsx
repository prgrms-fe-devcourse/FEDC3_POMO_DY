import styled from '@emotion/styled';
import { COLORS } from 'styles/colors';
import PencilSvg from '@public/icons/pencil.svg';
import ProfileSvg from '@public/icons/profile.svg';

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

const InfoDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 33px;
  gap: 10px;
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
  margin-left: 500px;
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

const Like = styled.div`
  display: grid;
  margin-left: 130px;
  margin-top: 125px;
  gap: 25px;
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
const User = styled.div`
  display: flex;
`;
const UserName = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  font-weight: 600;
  font-size: 25px;
  line-height: 30px;
`;

export default function MyProfile() {
  return (
    <>
      <Nav>Nav 임시</Nav>
      <Main>
        <Info>
          <ProfileSvg className="infoIcon" />
          <InfoDetail>
            <InfoUserName>김뽀모</InfoUserName>
            <PencilSvg />
            <InfoUserEmail>pomo@gmail.com</InfoUserEmail>
          </InfoDetail>
        </Info>
        <PasswordChangeButton>비밀번호 변경</PasswordChangeButton>
        <Like>
          <LikeTap>
            <LikeTapItem>팔로워 2명</LikeTapItem>
            <LikeTapItem>팔로잉 10명</LikeTapItem>
          </LikeTap>
          <User>
            <ProfileSvg />
            <UserName>김규란</UserName>
          </User>
          <User>
            <ProfileSvg />
            <UserName>내이름은슈퍼초길지</UserName>
          </User>
          <User>
            <ProfileSvg />
            <UserName>라면국물</UserName>
          </User>
        </Like>
      </Main>
    </>
  );
}
