import styled from '@emotion/styled';
import { COLORS } from 'styles/colors';

const Main = styled.div`
  margin-top: 100px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 96px;
  background: ${COLORS.sub_yellow};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
`;

export default function MyProfile() {
  return (
    <>
      <Nav>Nav 임시</Nav>
      <Main>
        <div>마이 프로필</div>
      </Main>
    </>
  );
}
