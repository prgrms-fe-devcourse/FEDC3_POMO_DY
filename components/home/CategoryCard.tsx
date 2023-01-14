import styled from '@emotion/styled';
import { COLORS } from 'styles/colors';

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
  font-weight: 700;
  font-size: 35px;
  font-family: 'UhBee EUN KYUNG';
  text-decoration: underline;
  color: #2b2b2b;
`;

const CategorySub = styled.div`
  font-weight: 400;
  font-size: 18px;
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

export default function CategoryCard() {
  return (
    <CardContainer>
      <CategoryTitle>카테고리</CategoryTitle>
      <CategorySub>뽀모방 개수</CategorySub>
      <CountCircle>4</CountCircle>
    </CardContainer>
  );
}
