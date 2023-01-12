import TomatoSvg from '@public/images/tomato.svg';
import PersonIconSvg from '@public/images/icon/person.svg';
import styled from '@emotion/styled';

const CardContainer = styled.div`
  width: 240px;
  height: 250px;
  border: 1px solid #000000;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: -30px;
  left: calc(50% - 33px);
`;

const TitleDiv = styled.div`
  font-family: 'UhBee EUN KYUNG';
  font-size: 40px;
`;

const TimeDiv = styled.div`
  font-size: 15px;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: #d44645;
  border-radius: 20px;
  border: none;
  font-size: 15px;
  text-align: center;
  color: white;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const DetailLink = styled.div`
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
`;

const HeadCount = styled.div`
  position: absolute;
  left: 5px;
  bottom: 5px;
  display: flex;
  width: 100%;
  gap: 5px;
`;

const CategoryCard = () => {
  return (
    <>
      <CardContainer>
        <ImageContainer>
          <TomatoSvg />
        </ImageContainer>
        <TitleDiv>카테고리</TitleDiv>
        <TimeDiv>00:10 ~ 11:59</TimeDiv>
        <Button>참여하기</Button>
        <DetailLink>상세정보</DetailLink>
        <HeadCount>
          <PersonIconSvg />4
        </HeadCount>
      </CardContainer>
    </>
  );
};

export default CategoryCard;
