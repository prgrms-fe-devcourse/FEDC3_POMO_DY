import styled from '@emotion/styled';

const UserCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  cursor: pointer;
  border-radius: 20px;

  &:hover {
    background-color: #ededed;
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.25);
  }
`;

const ImageContainer = styled.div`
  border-radius: 50%;
  width: 43px;
  height: 43px;
  border: 2px solid #838383;
  position: relative;
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
  font-size: 24px;
`;

export default function UserCard() {
  return (
    <UserCardContainer>
      <ImageContainer>
        <ActiveCircle></ActiveCircle>
      </ImageContainer>
      <UserNameContainer>User</UserNameContainer>
    </UserCardContainer>
  );
}
