import { tabContainerStyle, TabContentBackground } from '@components/post/styles';
import styled from '@emotion/styled';
import { COLORS } from 'styles/colors';
import ParticipantItem from './ParticipantItem';

export default function ParticipantTapContent() {
  return (
    <Container>
      <TabContentBackground>
        <ParticipantList>
          <ParticipantItem isHost />
          <Divider />
          <ParticipantItem />
          <ParticipantItem />
        </ParticipantList>
      </TabContentBackground>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${COLORS.sub_green};
  ${tabContainerStyle}
`;

const ParticipantList = styled.div`
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
