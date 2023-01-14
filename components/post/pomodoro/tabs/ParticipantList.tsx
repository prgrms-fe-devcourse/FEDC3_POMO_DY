import styled from '@emotion/styled';
import ParticipantItem from './ParticipantItem';

export default function ParticipantList() {
  return (
    <Container>
      <ParticipantItem isHost />
      <Divider />
      <ParticipantItem />
      <ParticipantItem />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  height: 100%;
  gap: 12px;
`;

const Divider = styled.div`
  width: 100%;
  height: 3px;
  background-color: #d9d9d9;
`;
