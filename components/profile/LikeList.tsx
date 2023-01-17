import styled from '@emotion/styled';
import { LikeItem } from './LikeItem';

export const LikeList = ({ list, title }) => {
  console.log(list);
  return (
    <LikeBox>
      <LikeHeader>
        <LikeTitle>{title}</LikeTitle>
        <LikeSubTitle>{list?.length} 명</LikeSubTitle>
      </LikeHeader>
      <Division />
      {list.map((data) => {
        return <LikeItem key={data.user} id={data.user} />;
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
