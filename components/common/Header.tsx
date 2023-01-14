import styled from '@emotion/styled';
import { FunctionComponent } from 'react';
import LogoSmall from '@public/images/logo-small.svg';
import Search from '@components/common/Search';
import { css } from '@emotion/react';

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

const imageUrl = (props: { src?: string }) => `
background-image: ${`url(${props.src});`}
background-repeat: no-repeat;
background-size: 85% 85%;  
`;

const Profile = styled.div`
  ${imageCircle};
  ${imageUrl}
`;

const Notification = styled.div`
  ${imageCircle};
  ${imageUrl}
`;

export const Header: FunctionComponent = () => {
  return (
    <Bar>
      <LogoContainer>
        <LogoSmall style={{ marginRight: '16px' }} />
        <LogoTitle> 뽀모 </LogoTitle>
      </LogoContainer>
      <Search />
      <User>
        <Profile src="/images/profile.svg" />
        <Notification src="/images/notification.svg" />
      </User>
    </Bar>
  );
};
