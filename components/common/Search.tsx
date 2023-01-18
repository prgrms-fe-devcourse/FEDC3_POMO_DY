/** @jsxImportSource @emotion/react */
import { FunctionComponent, ChangeEvent } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'next/image';

interface InputPropsBase {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

interface InputStyleProps extends InputPropsBase {
  minW?: number;
  minH?: number;
  maxW?: number;
  maxH?: number;
  maxLength?: number;
  icon?: JSX.Element;
  placeholder?: string;
}

interface ResultsComponent {
  children?: JSX.Element;
  isOpen: boolean;
}

interface User {
  _id: string;
  image?: string;
  fullName?: string;
  role?: string;
}

interface Category {
  _id: string;
  name: string;
}

interface Post {
  _id: string;
  title?: string;
  category?: Category | null;
}

interface Results {
  results: (User & Post)[];
}

const SearchContainer = styled.div`
  display: flex;
  position: relative;
  min-width: 300px;
  background-color: #ffffff;
  z-index: 100;
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
        src="/images/search.svg"
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
          opacity: 1;
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
          width: 50%;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
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
        const isUser = result.role;
        const isPost = result.title;
        if (isUser && isPost) {
          throw new Error('you must choose one between User and Post');
        } else if (!isUser && !isPost) {
          throw new Error('you must pass User or Post data to SearchResult component');
        }

        const isResult = isUser || isPost;

        return (
          isResult && (
            <Content
              key={result._id}
              src={isUser ? result.image || '/images/profile.svg' : '/images/post-index.svg'}
              alt={isUser ? '유저 이미지' : '뽀모도르 글 목차 이미지'}
              title={(isPost && result.title) || (isUser && result.fullName)}
              category={result.category && result.category.name ? result.category.name : null}
            />
          )
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
  onChange,
}) => {
  return (
    <SearchContainer>
      <SearchInputContainer>
        {icon}
        <SearchInput onChange={onChange} placeholder={placeholder} maxLength={maxLength} />
      </SearchInputContainer>
      {isOpen && children}
    </SearchContainer>
  );
};
