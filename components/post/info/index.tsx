import styled from '@emotion/styled';
import { COLORS } from 'styles/colors';
import { Post } from '../types';

interface PostInfoProps {
  postInfo: Post;
}

export default function PostInfo({ postInfo }: PostInfoProps) {
  return (
    <Container>
      <TitleWrapper>
        <Category>{postInfo.category.name}</Category>
        <Title>{postInfo.title}</Title>
      </TitleWrapper>
      <InfoItem>
        <Label>진행 일자</Label>
        <Content>{postInfo.date}</Content>
      </InfoItem>
      <InfoItem>
        <Label>반복</Label>
        <Content className="iteration">
          <span>0</span> / {postInfo.iteration}회
        </Content>
      </InfoItem>
      <InfoItem>
        <Label>진행 시간</Label>
        <Content>
          {postInfo.startTime} - {postInfo.endTime}
        </Content>
      </InfoItem>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-template-rows: max-content max-content;
  gap: 14px;
`;

const TitleWrapper = styled.div`
  display: flex;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0px 80px 80px 0px;
  padding: 13px 55px 13px 15px;
  align-items: center;
  gap: 13px;
  grid-column: 1 / span 2;
  margin-bottom: 11px;
  margin-right: auto;
`;

const Category = styled.div`
  color: #ff9a61;
  background-color: #fffbeb;
  border: 1.5px solid #fbf2cf;
  border-radius: 28px;
  padding: 3px 21px;
`;

const Title = styled.h1`
  color: #2b2b2b;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Label = styled.div`
  color: #ffffff;
  border-radius: 28px;
  background-color: ${COLORS.sub_green};
  padding: 6px 18px;
`;

const Content = styled.div`
  color: #2b2b2b;
  width: 181px;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  padding: 5px 0;
  background-color: white;
  text-align: center;
  border-radius: 28px;

  &.iteration {
    width: 109px;
  }

  &.iteration > span {
    color: ${COLORS.main};
  }
`;
