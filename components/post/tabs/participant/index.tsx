import styled from '@emotion/styled';
import { COLORS } from 'styles/colors';
import { StyledTabContainer, TabContentBackground } from '..';
import ParticipantItem from './ParticipantItem';

export default function ParticipantTapContent() {
  return (
    <StyledParticipantsTabContainer>
      <TabContentBackground>
        <ParticipantList>
          <ParticipantItem isHost />
          <Divider />
          <ParticipantItem />
          <ParticipantItem />
        </ParticipantList>
      </TabContentBackground>
    </StyledParticipantsTabContainer>
  );
}

const StyledParticipantsTabContainer = styled(StyledTabContainer)`
  background-color: ${COLORS.sub_green};
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
