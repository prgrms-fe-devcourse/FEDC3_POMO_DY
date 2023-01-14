import CategoryCard from '@components/home/CategoryCard';
import LogoSvg from '@public/images/logo.svg';
import SearchIcon from '@public/images/icon/search.svg';
import styled from '@emotion/styled';
import { COLORS } from './../styles/colors';
import UserCard from '@components/home/UserCard';

const MainContainer = styled.main`
  background-color: white;
  height: 100vh; /* 나중에 헤더 길이 빼야함  */
  display: flex;
  justify-content: center;
`;

const CategoryContainer = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 15%;
  gap: 15px;
  background: ${COLORS.sub_yellow};
`;

const MainTextDiv = styled.div`
  font-family: 'UhBee EUN KYUNG';
  font-weight: 700;
  font-size: 40px;
  margin-top: 50px;
  display: flex;
  gap: 15px;

  & > .logo {
    display: block;
    width: 50px;
    height: 50px;
  }
`;

const SubTextDiv = styled.div`
  color: #333333;
  font-size: 22px;
`;

const CategoryCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
`;

const InputContainer = styled.div`
  height: 50px;
  border-radius: 10px;
  font-size: 18px;
  line-height: 40px;
  color: #838383;
  position: relative;

  & > .search {
    position: absolute;
    left: 12px;
    top: 10px;
    width: 24px;
    height: 25px;
    cursor: pointer;
  }
`;

const UserSearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding-left: 50px;
  border-radius: 10px;
  box-sizing: border-box;
`;

const UserList = styled.ul`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export default function Home() {
  return (
    <MainContainer>
      <CategoryContainer>
        <MainTextDiv>
          <LogoSvg className="logo" />
          같이 뽀모해요.
        </MainTextDiv>
        <SubTextDiv>원하시는 카테고리를 선택해주세요.</SubTextDiv>
        <CategoryCardList>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </CategoryCardList>
      </CategoryContainer>
      <UserListContainer>
        <InputContainer>
          <SearchIcon className="search" />
          <UserSearchInput type="text" placeholder="유저 검색하기" />
        </InputContainer>
        <UserList>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </UserList>
      </UserListContainer>
    </MainContainer>
  );
}
