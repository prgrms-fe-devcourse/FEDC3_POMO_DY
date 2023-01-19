import styled from '@emotion/styled';

import { UserInfo } from './types';

interface Props {
  users: Array<UserInfo>;
}
``;
function UserList({ users }: Props) {
  const DefaultProfile = '/images/profile.svg';

  return (
    <Container>
      {users.map(({ userName, image }, idx) => {
        return (
          <UserItem key={idx}>
            <ProfileImage src={image ?? DefaultProfile} />
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
  margin-bottom: 5px;
`;

const ProfileImage = styled.img((prop) => {
  return {
    minWidth: '25px',
    maxWidth: '25px',
  };
});

const UserName = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellips;
  font-size: 1.1rem;
`;

export default UserList;
