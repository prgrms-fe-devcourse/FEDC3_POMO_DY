import styled from '@emotion/styled';
import { COLORS } from 'styles/colors';
import { LikeItem } from './LikeItem';
import { FollowingIdData, LikeListProps } from './types';

export const LikeList = ({ list, title, isMyInfo }: LikeListProps) => {
  let titleName;

  if (title === 'following') {
    titleName = '팔로잉';
  } else {
    titleName = '팔로워';
  }

  return (
    <LikeBox>
      <LikeHeader>
        <LikeTitle>{titleName}</LikeTitle>
        <LikeSubTitle>{list?.length} 명</LikeSubTitle>
      </LikeHeader>
      <Division />
      {list.map((data: FollowingIdData) => {
        return (
          <LikeItem key={data._id} title={title} following={data.user} followers={data.follower} isMyInfo={isMyInfo} />
        );
      })}
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
  overflow: auto;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${COLORS.main};
    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${COLORS.main};
    border-radius: 5px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const LikeHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  height: 60px;
`;
const LikeTitle = styled.h3`
  margin-top: 20px;
  font-weight: 600;
  font-size: 35px;
  line-height: 5px;
  color: #000000;
`;
const LikeSubTitle = styled.h4`
  margin-top: 10px;
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
