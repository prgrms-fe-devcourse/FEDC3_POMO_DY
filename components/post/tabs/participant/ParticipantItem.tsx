import styled from '@emotion/styled';
import EmptyProfileImage from 'public/icons/profile.svg';
import { COLORS } from 'styles/colors';

interface ParticipantItemProps {
  isHost?: boolean;
}

export default function ParticipantItem({ isHost }: ParticipantItemProps) {
  return (
    <Container>
      <EmptyProfileImage />
      <UserName>남주영</UserName>
      {isHost && (
        <HostLabel>
          <Circle />
          <Host>방장</Host>
        </HostLabel>
      )}
    </Container>
  );
}

const Container = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  display: flex;
  gap: 15px;
  position: relative;
  padding: 9px 21px;
  align-items: center;
`;

const UserName = styled.div`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

const HostLabel = styled.div`
  background-color: #ffffff;
  border: 1px solid #2b2b2b;
  border-radius: 0px 80px 80px 0px;
  display: flex;
  gap: 16px;
  align-items: center;
  padding: 6px 20px 6px 9px;
  margin-left: auto;
`;

const Circle = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${COLORS.main};
  border-radius: 50%;
`;

const Host = styled.div`
  font-family: 'UhBee EUN KYUNG';
  font-weight: 700;
  font-size: 20px;
  line-height: 34px;
  color: #000000;
`;
