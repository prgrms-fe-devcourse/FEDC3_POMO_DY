import { FunctionComponent } from 'react';
import SearchIcon from '@public/images/search.svg';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface inputStyle {
  minW?: number;
  minH?: number;
  maxW?: number;
  maxH?: number;
  maxLength?: number;
  icon?: JSX.Element;
}

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 300px;
  padding: 5px 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  background-color: white;
  gap: 10px;
`;

const inputStyle = css`
  width: 75%;
  border: none;
`;

const SearchInput = styled('input')`
  ${inputStyle},
  &:focus {
    outline: none;
  }
`;

const Search: FunctionComponent<inputStyle> = ({ icon = <SearchIcon />, maxLength = 30 }) => {
  return (
    <SearchContainer>
      {icon}
      <SearchInput placeholder="검색어를 입력해주세요!" maxLength={maxLength} />
    </SearchContainer>
  );
};

export default Search;
