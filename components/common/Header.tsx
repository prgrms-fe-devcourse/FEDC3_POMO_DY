import styled from '@emotion/styled';
import { FunctionComponent } from 'react';
import LogoSmall from '@public/images/logo-small.svg';
import { SearchBox, SearchResult } from '@components/common/Search';
import { css } from '@emotion/react';
import Image from 'next/image';

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
  return (
    <Bar>
      <LogoContainer>
        <LogoSmall style={{ marginRight: '16px' }} />
        <LogoTitle> 뽀모 </LogoTitle>
      </LogoContainer>
      <SearchBox isOpen={false}>
        <SearchResult results={[]} />
      </SearchBox>
      <User>
        <Profile src="/images/profile.svg" alt="프로필이미지" />
        <Notification src="/images/notification.svg" alt="알람이미지" />
      </User>
    </Bar>
  );
};
