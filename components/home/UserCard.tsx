import styled from '@emotion/styled';
import ProfileIcon from '@public/icons/profile.svg';
import Link from 'next/link';
import { UserInfoType } from './types';

const UserCardContainer = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;

  & > .link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    color: #000000;
  }

  &:hover {
    background-color: #ededed;
  }
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: relative;

  & > .profile {
    width: 100%;
    height: 100%;
  }
`;

const ActiveCircle = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 11px;
  height: 12px;
  background: #93e396;
  border-radius: 50%;
`;

const UserNameContainer = styled.div`
  font-size: 22px;
`;

export default function UserCard({ _id, fullName, isOnline }: UserInfoType) {
  const nextUrl = `/profile/${_id}`;
  return (
    <UserCardContainer>
      <Link href={nextUrl} style={{ textDecoration: 'none' }} className="link">
        <ImageContainer>
          <ProfileIcon className="profile" />
          {isOnline && <ActiveCircle></ActiveCircle>}
        </ImageContainer>
        <UserNameContainer>{fullName}</UserNameContainer>
      </Link>
    </UserCardContainer>
  );
}
