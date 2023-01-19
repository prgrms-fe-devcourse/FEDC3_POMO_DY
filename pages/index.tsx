import CategoryCard from '@components/home/CategoryCard';
import LogoSvg from '@public/images/logo.svg';
import SearchIcon from '@public/icons/search.svg';
import styled from '@emotion/styled';
import { COLORS } from './../styles/colors';
import UserCard from '@components/home/UserCard';
import { ChangeEvent, useEffect, useState } from 'react';
import { axiosInstance } from 'api';
import { CategoryInfoType, UserInfoType } from '@components/home/types';
import { AuthRequired } from '@components/auth/authrequire';

const MainContainer = styled.main`
  background-color: white;
  height: calc(100vh - 100px);
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
  height: 100%;
  min-width: 260px;
  padding: 20px;
  width: 15%;
  gap: 15px;
  background: ${COLORS.sub_yellow};
`;

const MainTextDiv = styled.div`
  font-family: 'UhBee EUN KYUNG';
  font-weight: 700;
  font-size: 48px;
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
  overflow-y: scroll;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background-color: #e5e5e5;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #c4c4c4;
  }
`;

export default function Home() {
  const [categoryArr, setCategoryArr] = useState(Array<CategoryInfoType>);
  const [users, setUsers] = useState(Array<UserInfoType>);
  const [searchKeyword, setSearchKeyword] = useState(String);

  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const getCategoryArr = async () => {
    try {
      const res = await axiosInstance.get('/api/channels');
      if (res.status === 200) {
        setCategoryArr(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getUserList = async () => {
    try {
      const res = await axiosInstance.get('/api/users/get-users');
      if (res.status === 200) {
        setUsers(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategoryArr();
    getUserList();
  }, []);

  return (
    <AuthRequired>
      <MainContainer>
        <CategoryContainer>
          <MainTextDiv>
            <LogoSvg className="logo" />
            같이 뽀모해요.
          </MainTextDiv>
          <SubTextDiv>원하시는 카테고리를 선택해주세요.</SubTextDiv>
          <CategoryCardList>
            {categoryArr.map(({ _id, name, posts }: CategoryInfoType) => (
              <CategoryCard key={_id} _id={_id} name={name} posts={posts} />
            ))}
          </CategoryCardList>
        </CategoryContainer>
        <UserListContainer>
          <InputContainer>
            <SearchIcon className="search" />
            <UserSearchInput
              type="text"
              placeholder="유저 검색하기"
              onChange={onChangeInputHandler}
              value={searchKeyword}
            />
          </InputContainer>
          <UserList>
            {users
              .filter(({ fullName }: UserInfoType) => fullName?.includes(searchKeyword))
              .map(({ _id, fullName, isOnline }) => (
                <UserCard key={_id} _id={_id} fullName={fullName} isOnline={isOnline} />
              ))}
          </UserList>
        </UserListContainer>
      </MainContainer>
    </AuthRequired>
  );
}
