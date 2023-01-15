/** @jsxImportSource @emotion/react */
import { FunctionComponent, ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'next/image';

interface InputStyleProps {
  minW?: number;
  minH?: number;
  maxW?: number;
  maxH?: number;
  maxLength?: number;
  icon?: JSX.Element;
  placeholder?: string;
}

interface ResultsComponent {
  children?: ReactNode;
  isOpen: boolean;
}

interface User {
  _id: string;
  image?: string;
  fullName?: string;
}

interface Channel {
  name?: string;
}

interface Post {
  _id: string;
  title?: string;
  channel?: Channel;
}

interface Results {
  results: (User & Post)[];
}

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  min-width: 300px;
  background-color: #ffffff;
`;

const SearchIcon = () => {
  return (
    <div
      css={css`
        width: 1rem;
        height: 1rem;
      `}
    >
      <Image
        css={css`
          width: 100%;
          height: 100%;
        `}
        width={15}
        height={15}
        src="images/search.svg"
        alt="검색아이콘"
      />
    </div>
  );
};

const SearchInput = styled('input')`
  width: 80%;
  border: none;
  &:focus {
    outline: none;
  }
`;
const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  width: 100%;
  gap: 10px;
  }
`;

const Content = (props: { src: string; alt: string; title: string | undefined; category: string | null }) => {
  const { src, alt, title, category } = props;
  return (
    <li
      css={css`
        display: flex;
        align-items: center;
        background-color: #ffffff;
        padding-left: 10px;
        gap: 15px;
        cursor: pointer;
        &:hover {
          background-color: #fffbeb;
          opacity: 0.8;
        }
      `}
    >
      <div
        css={css`
          width: 25px;
          height: 25px;
        `}
      >
        <Image
          css={css`
            width: 100%;
            height: 100%;
          `}
          width={15}
          height={15}
          src={src}
          alt={alt}
        />
      </div>
      <p
        css={css`
          padding: 0px 0px;
        `}
      >
        {title}
      </p>
      {category ? (
        <span
          css={css`
            width: 3rem;
            color: #ff9a61;
            font-weight: bold;
            font-size: 1rem;
            text-align: center;
            padding: 1px 2px;
            border: 2px solid #fbf2cf;
            border-radius: 15px;
            background-color: #fffbeb;
          `}
        >
          {category}
        </span>
      ) : (
        <></>
      )}
    </li>
  );
};

const SearchResultBase: FunctionComponent<Results & { className?: string }> = ({ results, className = '' }) => {
  return results.length > 0 ? (
    <ul className={className}>
      {results.map((result) => {
        return (
          <Content
            key={result._id}
            src={result.image || '/images/post-index.svg'}
            alt={result.image ? '유저 이미지' : '뽀모도르 글 목차 이미지'}
            title={result.fullName || result.title}
            category={(result.channel && result.channel?.name) || null}
          />
        );
      })}
    </ul>
  ) : (
    <></>
  );
};

export const SearchResult = styled(SearchResultBase)`
  list-style: none;
  position: absolute;
  padding: 0;
  border: 1px solid transparent;
  border-radius: 5px;
  top: 15px;
  width: 100%;
  max-height: 400px;
  overflow-y: scroll;
`;

export const SearchBox: FunctionComponent<InputStyleProps & ResultsComponent> = ({
  icon = <SearchIcon />,
  maxLength = 30,
  children,
  placeholder = '검색어를 입력해주세요!',
  isOpen,
}) => {
  return (
    <SearchContainer>
      <SearchInputContainer>
        {icon}
        <SearchInput placeholder={placeholder} maxLength={maxLength} />
      </SearchInputContainer>
      {isOpen && children}
    </SearchContainer>
  );
};
