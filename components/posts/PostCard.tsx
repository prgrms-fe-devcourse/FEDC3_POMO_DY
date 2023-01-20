import { MouseEventHandler, useEffect, useState } from 'react';
import styled from '@emotion/styled';

import ProfileIcon from '@public/icons/profile.svg';
import SadTomatoSvg from '@public/images/sad-tomato.svg';
import { COLORS } from 'styles/colors';
import { PostDetailType } from './types';
import { changeMaxText, getElapsedTimeStr, getIsInProgress, isEnd } from './util';
interface Like {
  _id: string;
  user: string;
  post: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
}

interface PostInfo {
  _id: string;
  channelId: string;
  title: string;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  iteration: string;
  likes: Array<Like>;
}

interface Props {
  _id: string;
  participants: Array<Like>;
  data: PostDetailType;
  createdAt: string;
  onPostClick: (post: PostInfo) => void;
}
export default function PostCard({ _id, participants, data, createdAt, onPostClick }: Props) {
  const { channelId, title, date, content: description, startTime, endTime, interval: iteration } = data;

  const [isInProgress, setIsInProgress] = useState(false);

  const onClick: MouseEventHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isInProgress) {
      onPostClick({ _id, channelId, title, date, description, startTime, endTime, iteration, likes: participants });
    }
  };

  useEffect(() => {
    setIsInProgress(getIsInProgress(date, startTime, endTime));
  }, [startTime, endTime]);

  return (
    <CardContainer onClick={onClick}>
      {isInProgress && (
        <CardCoverContainer>
          <SadTomatoSvg />
          <CoverMsg>진행 중인 뽀모예요</CoverMsg>
        </CardCoverContainer>
      )}
      {isEnd(`${date} ${endTime}`) && (
        <EndCardCoverContainer>
          <SadTomatoSvg />
          <CoverMsg>종료된 뽀모예요</CoverMsg>
        </EndCardCoverContainer>
      )}
      <TopBox>
        <TextDate>{date}</TextDate>
        <Time>
          <RedText>{startTime || '00:00'}</RedText> ~ {endTime || '00:00'}
        </Time>
        <RecursionCount>
          반복 <RedText>{iteration || '0'}회</RedText>
        </RecursionCount>
      </TopBox>
      <BottomBox>
        <BottomLeftBox>
          <TitleContainer>{changeMaxText(title, 15) || '빈 제목'}</TitleContainer>
          <ContentContainer>{changeMaxText(description, 20) || '빈 내용'}</ContentContainer>
          <SubContainer>{getElapsedTimeStr(createdAt)}</SubContainer>
        </BottomLeftBox>
        <BottomRightBox>
          <ProfileIcon className="profile" />
          <CountCircle>{participants.length}명</CountCircle>
        </BottomRightBox>
      </BottomBox>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  min-width: 370px;
  width: 31.5%;
  height: 250px;
  padding: 40px;
  color: #000;
  background: ${COLORS.sub_yellow};
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: scale(1.03, 1.03);
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  }
`;

const CardCoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 5px;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  top: 0;
  left: 0;
  background: rgba(161, 194, 152, 0.9);
  z-index: 1;
`;

const EndCardCoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  gap: 5px;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  top: 0;
  left: 0;
  background: rgba(203, 203, 203, 0.9);
  z-index: 1;
`;

const CoverMsg = styled.div`
  font-family: 'UhBee EUN KYUNG';
  font-weight: 700;
  font-size: 18px;
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
  width: 70%;
`;

const TitleContainer = styled.div`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 5px;
`;

const ContentContainer = styled.div`
  font-size: 14px;
`;

const SubContainer = styled.div`
  margin-top: 10px;
  font-weight: 500;
  font-size: 13px;
  color: #2b2b2b;
  opacity: 0.7;
`;

const BottomRightBox = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 30%;

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
