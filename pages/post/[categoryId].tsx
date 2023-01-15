import PostCard from '@components/posts/PostCard';
import styled from '@emotion/styled';
import LeftArrow from '@public/icons/left_arrow.svg';
import { COLORS } from 'styles/colors';

const MainContainer = styled.main`
  min-height: 100vh; // 헤더길이 빼야함
  background-color: #ffffff;
  padding: 120px 180px;
`;

const PrevButton = styled.button`
  padding: 12px 18px;
  color: #ff9a61;
  font-size: 20px;
  font-weight: 600;
  background: #fbf2cf;
  border-radius: 28px;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 40px;
  min-width: 250px;
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.03, 1.03);
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 350px;
`;
const CategoryTitle = styled.h1`
  font-weight: 700;
  font-size: 48px;
  flex-grow: 1;
  white-space: nowrap;
`;

const CreateButton = styled.button`
  background: ${COLORS.main};
  border-radius: 28px;
  font-weight: 600;
  font-size: 18px;
  width: 162px;
  height: 48px;
  color: #ffffff;
  cursor: pointer;
  min-width: 162px;

  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.03, 1.03);
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  }
`;

const PostCardList = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
`;

export default function post() {
  return (
    <MainContainer>
      <PrevButton>
        <LeftArrow />
        다른 카테고리 보러 가기
      </PrevButton>
      <MainHeader>
        <CategoryTitle>공부</CategoryTitle>
        <CreateButton>뽀모 생성하기</CreateButton>
      </MainHeader>
      <PostCardList>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostCardList>
    </MainContainer>
  );
}
