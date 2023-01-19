import styled from '@emotion/styled';
import { FunctionComponent, ChangeEvent, useCallback, useState, useEffect } from 'react';
import LogoSmall from '@public/images/logo-small.svg';
import { SearchBox, SearchResult } from '@components/common/Search';
import { css } from '@emotion/react';
import Image from 'next/image';
import { axiosInstance } from 'api';
import { isCategoryNameInDB } from '@components/post/types';
import { CATEGORY_NAME_MAP } from '@components/post/constants';

interface Category {
  _id: string;
  name: string;
}

const Bar = styled.nav`
  display: flex;
  align-items: center;
  height: 100px;
`;

const LogoContainer = styled.div`
  display: flex;
  min-width: 120px;
  align-items: center;
  margin-left: 16px;
  margin-right: auto;
`;
const LogoTitle = styled.div`
  font-family: 'UhBee EUN KYUNG';
  font-size: 1.5rem;
  font-weight: 700;
`;

const User = styled.div`
  display: flex;
  height: 100%;
  margin: 0px 20px;
  align-items: center;
  gap: 15px;
`;

const imageCircle = css`
  width: 35px;
  height: 35px;
  border: 1px solid transparent;
  border-radius: 30px;
  cursor: pointer;
`;

const imageBase = (props: { className?: string; src: string; alt: string }) => {
  return (
    <div className={props.className}>
      <Image src={props.src} alt={props.alt} width={15} height={15} style={{ width: '85%', height: '85%' }} />
    </div>
  );
};

const Profile = styled(imageBase)`
  ${imageCircle}
  padding-top:3px;
`;

const Notification = styled(imageBase)`
  ${imageCircle}
`;

export const Header: FunctionComponent = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (isFetched && categories.length > 0) {
      getResultsSearch(keyword, categories);
    }
  }, [isFetched, keyword, categories]);

  useEffect(() => {
    setIsOpen(searchResults.length > 0);
  }, [searchResults]);

  const getCategories = useCallback(async () => {
    try {
      const { data } = await axiosInstance.get('/api/channels');
      const categoriesName = data.map(({ _id, name }: { _id: string; name: string }) => {
        const categoryName = name;
        if (!isCategoryNameInDB(categoryName)) throw new Error('잘못된 카테고리입니다.');

        return {
          _id,
          name: CATEGORY_NAME_MAP[categoryName],
        };
      });
      setCategories(categoriesName);
      setIsFetched(true);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const getResultsSearch = useCallback(async (keyword: string, categories: Category[]) => {
    if (keyword === '') {
      return;
    }

    try {
      const res = await axiosInstance.get(`/api/search/all/${keyword}`);
      if (res.status === 200 && res.data.length > 0) {
        const { data } = res;
        const finalData = data.map(
          (result: {
            _id: string;
            role?: string;
            image?: string;
            fullName?: string;
            channelId?: string;
            title?: string;
            category?: object | null;
          }) => {
            const categoryData: Category | undefined | null = result.channelId
              ? categories.find((categoryName) => categoryName._id === result.channelId)
              : null;

            const returnValue = { ...result };
            returnValue.category = categoryData ? { ...categoryData } : null;

            return returnValue;
          },
        );
        console.log(finalData);
        setSearchResults(finalData);
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    if (value.trim().length === 0) {
      setIsOpen(false);
    } else {
      setKeyword(value);
    }
  }, []);
  return (
    <Bar>
      <LogoContainer>
        <LogoSmall style={{ marginRight: '16px' }} />
        <LogoTitle> 뽀모 </LogoTitle>
      </LogoContainer>
      <SearchBox onChange={onChangeHandler} isOpen={isOpen}>
        <SearchResult results={searchResults} />
      </SearchBox>
      <User>
        <Profile src="/images/profile.svg" alt="프로필이미지" />
        <Notification src="/images/notification.svg" alt="알람이미지" />
      </User>
    </Bar>
  );
};
