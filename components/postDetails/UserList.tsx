import styled from '@emotion/styled';

import DefaultProfile from 'public/images/profile.svg';
import { UserInfo } from './types';

interface Props {
  users: Array<UserInfo>;
}

function UserList({ users }: Props) {
  return (
    <Container>
      {users.map(({ userName }, idx) => {
        return (
          <UserItem key={idx}>
            <ProfileImage />
            <UserName>{userName}</UserName>
          </UserItem>
        );
      })}
    </Container>
  );
}

const Container = styled.ul`
  list-style: none;
  padding: 0;
  max-height: 90px;
  overflow: scroll;
`;

const UserItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileImage = styled(DefaultProfile)`
  min-width: 30px;
  max-width: 30px;
`;

const UserName = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellips;
  font-size: 1.1rem;
`;

export default UserList;
