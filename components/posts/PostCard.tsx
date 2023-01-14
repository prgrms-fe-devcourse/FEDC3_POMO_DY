import styled from '@emotion/styled';
import { COLORS } from 'styles/colors';
import ProfileIcon from '@public/icons/profile-purple.svg';

const CardContainer = styled.div`
  width: 345px;
  height: 240px;
  padding: 40px;
  background: ${COLORS.sub_yellow};
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.03, 1.03);
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  }
`;

const TopBox = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const Date = styled.div`
  font-weight: 600;
  font-size: 13px;
  color: #2b2b2b;
`;
const Time = styled.div`
  font-weight: 800;
  font-size: 40px;
  color: #838383;
  text-align: center;
`;
const RedText = styled.span`
  color: #d44645;
`;

const RecursionCount = styled.div`
  font-weight: 600;
  font-size: 13px;
  text-align: right;
`;

const BottomBox = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  align-items: center;
`;

const BottomLeftBox = styled.div`
  width: 60%;
`;

const TitleContainer = styled.div`
  font-weight: 600;
  font-size: 20px;
`;

const ContentContainer = styled.div`
  font-size: 14px;
`;

const SubContainer = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: 13px;
  color: #2b2b2b;
`;

const BottomRightBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;
`;

const CountCircle = styled.div`
  width: 39px;
  height: 39px;
  background-color: ${COLORS.main};
  margin-left: -8px;
  border-radius: 50%;
  font-weight: 600;
  font-size: 13px;
  color: #ffffff;
  text-align: center;
  line-height: 39px;
`;

export default function PostCard() {
  return (
    <CardContainer>
      <TopBox>
        <Date>2022.01.11</Date>
        <Time>
          <RedText>10:10</RedText> ~ 11:00
        </Time>
        <RecursionCount>
          반복 <RedText>1회</RedText>
        </RecursionCount>
      </TopBox>
      <BottomBox>
        <BottomLeftBox>
          <TitleContainer>모닝 스터디</TitleContainer>
          <ContentContainer>굿모닝! 아침 루틴 실천하기!</ContentContainer>
          <SubContainer>1시간 전</SubContainer>
        </BottomLeftBox>
        <BottomRightBox>
          <ProfileIcon />
          <CountCircle>7명</CountCircle>
        </BottomRightBox>
      </BottomBox>
    </CardContainer>
  );
}
