import styled from '@emotion/styled';
import { COLORS } from 'styles/colors';
import PencilImg from '@public/icons/pencil.svg';
import ProfileImg from '@public/icons/profile.svg';

export const UserInfo = ({ email, userName, isMyInfo }) => {
  const isFallow = false;
  return (
    <>
      <InfoContainer>
        <Info>
          <ProfileImg className="infoIcon" />
          <InfoDetail>
            <InfoUserName>{userName}</InfoUserName>
            {isMyInfo && <PencilImg />}
            <InfoUserEmail>{email}</InfoUserEmail>
          </InfoDetail>
        </Info>
        {isMyInfo ? (
          <RedButton>비밀번호 변경</RedButton>
        ) : isFallow ? (
          <GrayButton>팔로잉</GrayButton>
        ) : (
          <RedButton>팔로우</RedButton>
        )}
      </InfoContainer>
    </>
  );
};

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

const Button = styled.button`
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

const RedButton = styled(Button)`
  background: ${COLORS.main};
  border-color: ${COLORS.main};
`;

const GrayButton = styled(Button)`
  background: #838383;
  border-color: #838383;
`;
