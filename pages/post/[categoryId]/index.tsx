import { CATEGORY_NAME_MAP } from '@components/post/constants';
import { CategoryNameInDB } from '@components/post/types';
import PostCard from '@components/posts/PostCard';
import styled from '@emotion/styled';
import LeftArrow from '@public/icons/left_arrow.svg';
import { publicApi } from 'api';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { COLORS } from 'styles/colors';

interface CateoryIdProps {
  categoryId: string;
  categoryName: CategoryNameInDB;
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { categoryId } = query;

  let id, name;
  if (typeof categoryId === 'string') {
    const splitedStr = categoryId.split('-');
    id = splitedStr[0];
    name = splitedStr[1];
  }

  return {
    props: {
      categoryId: id,
      categoryName: name,
    },
  };
};

export default function Post({ categoryId, categoryName }: CateoryIdProps) {
  const [posts, setPosts] = useState([]);

  const translatedName = CATEGORY_NAME_MAP[categoryName];

  const getPosts = useCallback(async () => {
    try {
      const res = await publicApi.get(`/posts/channel/${categoryId}`);
      if (res.status === 200) {
        setPosts(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <MainContainer>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <PrevButton>
          <LeftArrow />
          다른 카테고리 보러 가기
        </PrevButton>
      </Link>
      <MainHeader>
        <CategoryTitle>{translatedName}</CategoryTitle>
        <Link href={`/post/create/${categoryId}`}>
          <CreateButton>뽀모 생성하기</CreateButton>
        </Link>
      </MainHeader>
      <PostCardList>
        {!posts.length && <Notice>모집 중인 뽀모방이 없어요</Notice>}
        {posts.map(({ _id, likes, title, createdAt }) => (
          <PostCard key={_id} _id={_id} participants={likes} data={JSON.parse(title)} createdAt={createdAt} />
        ))}
      </PostCardList>
    </MainContainer>
  );
}

const MainContainer = styled.main`
  min-height: calc(100vh - 100px);
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
  margin-bottom: 50px;
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
  gap: 30px;
`;

const Notice = styled.div`
  flex-grow: 1;
  margin-top: 100px;
  font-size: 23px;
  text-align: center;
  color: #828282;
`;
