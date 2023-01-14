import styled from '@emotion/styled';
import { COLORS } from 'styles/colors';
import BigProfileSvg from '@public/images/bigprofile.svg';
import PencilSvg from '@public/icons/pencil.svg';
import ProfileSvg from '@public/icons/profile.svg';

const Main = styled.div`
  margin-top: 100px;
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
`;

const InfoDetail = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 50px;
  justify-content: center;
  align-items: center;
  margin-top: 33px;
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
`;

export default function MyProfile() {
  return (
    <>
      <Nav>Nav 임시</Nav>
      <Main>
        <Info>
          <BigProfileSvg />
          <InfoDetail>
            <InfoUserName>김뽀모</InfoUserName>
            <PencilSvg />
            <InfoUserEmail>pomo@gmail.com</InfoUserEmail>
          </InfoDetail>
        </Info>
        <PasswordChangeButton>비밀번호 변경</PasswordChangeButton>
        <Like>
          <div>
            <div>팔로워</div>
            <div>팔로잉</div>
          </div>
          <div>
            <ProfileSvg />
            <div>김규란</div>
          </div>
        </Like>
      </Main>
    </>
  );
}
