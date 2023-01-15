import styled from '@emotion/styled';
import { COLORS } from 'styles/colors';
import ProfileIcon from '@public/icons/profile.svg';

const CardContainer = styled.div`
  min-width: 354px;
  height: 240px;
  padding: 40px 50px;
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
const TextDate = styled.div`
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

  & > .profile {
    width: 39px;
    height: 39px;
  }
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

interface Props {
  _id: string;
  participants: [];
  data: string;
  createdAt: string;
}

export default function PostCard({ _id, participants, data, createdAt }: Props) {
  const { title, date, description, startTime, endTime, iteration } = JSON.parse(data);

  let elapsedDateStr = '';
  const dateObj = new Date(createdAt).getTime();
  const elapsedTime = Date.now() - dateObj;
  const elapsedHour = Math.floor(elapsedTime / 1000 / 60 / 60);
  const elapsedDay = Math.floor(elapsedHour / 24);
  if (elapsedHour > 24) elapsedDateStr = `${elapsedDay}일 ${elapsedHour - elapsedDay * 24}`;
  else elapsedDateStr = elapsedHour + '';

  return (
    <CardContainer>
      <TopBox>
        <TextDate>{date}</TextDate>
        <Time>
          <RedText>{startTime}</RedText> ~ {endTime}
        </Time>
        <RecursionCount>
          반복 <RedText>{iteration}회</RedText>
        </RecursionCount>
      </TopBox>
      <BottomBox>
        <BottomLeftBox>
          <TitleContainer>{title}</TitleContainer>
          <ContentContainer>{description}</ContentContainer>
          <SubContainer>{elapsedDateStr}시간 전</SubContainer>
        </BottomLeftBox>
        <BottomRightBox>
          <ProfileIcon className="profile" />
          <CountCircle>{participants.length + 1}명</CountCircle>
        </BottomRightBox>
      </BottomBox>
    </CardContainer>
  );
}
