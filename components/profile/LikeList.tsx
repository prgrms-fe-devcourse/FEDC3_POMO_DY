import styled from '@emotion/styled';
import ProfileImg from '@public/icons/profile.svg';

export const LikeList = () => {
  return (
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
  );
};

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