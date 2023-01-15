import styled from '@emotion/styled';
import Link from 'next/link';
import { COLORS } from 'styles/colors';

interface Props {
  id: string;
  name: string;
  posts: [];
}

const CardContainer = styled.div`
  width: 224px;
  height: 214px;
  background: #ffffff;
  border: 15px solid ${COLORS.main};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03, 1.03);
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  }
`;

const CategoryTitle = styled.div`
  width: 75%;
  padding: 6px 0;
  text-align: center;
  font-weight: 700;
  font-size: 35px;
  font-family: 'UhBee EUN KYUNG';
  border-bottom: 2px solid;
  color: #2b2b2b;
`;

const CategorySub = styled.div`
  font-weight: 400;
  font-size: 18px;
  text-decoration: none;
  color: #000000;
`;

const CountCircle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${COLORS.main};
  font-family: 'UhBee EUN KYUNG';
  font-weight: 700;
  font-size: 30px;
  color: #ffffff;
  text-align: center;
  line-height: 50px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.03, 1.03);
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  }
`;

export default function CategoryCard({ id, name, posts }: Props) {
  const nextUrl = `/post/${id}`;

  const gettranslateName = (name: string) => {
    switch (name) {
      case 'study':
        return '공부';
      case 'develop':
        return '개발';
      case 'job':
        return '취업';
      case 'reading':
        return '독서';
      case 'hobby':
        return '취미';
      case 'etc':
        return '기타';
      default:
        return '카테고리';
    }
  };

  return (
    <Link href={nextUrl} style={{ textDecoration: 'none' }}>
      <CardContainer>
        <CategoryTitle>{gettranslateName(name)}</CategoryTitle>
        <CategorySub>뽀모방 개수</CategorySub>
        <CountCircle>{posts.length}</CountCircle>
      </CardContainer>
    </Link>
  );
}
