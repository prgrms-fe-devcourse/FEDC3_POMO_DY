import styled from '@emotion/styled';
import * as Tabs from '@radix-ui/react-tabs';
import { COLORS } from 'styles/colors';
import CommentTapContent from './comment';
import ParticipantTapContent from './participant';

export default function PostTabs() {
  return (
    <Tabs.Root defaultValue="comments">
      <Tabs.List>
        <StyledCommentsTabTrigger value="comments">댓글</StyledCommentsTabTrigger>
        <StyledParticipantsTabTrigger value="participants">참여자</StyledParticipantsTabTrigger>
      </Tabs.List>
      <Tabs.Content value="comments">
        <CommentTapContent />
      </Tabs.Content>
      <Tabs.Content value="participants">
        <ParticipantTapContent />
      </Tabs.Content>
    </Tabs.Root>
  );
}

const StyledTabTrigger = styled(Tabs.Trigger)`
  border-radius: 20px 20px 0px 0px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  padding: 14px 85px;
  color: #ffffff;
`;

const StyledCommentsTabTrigger = styled(StyledTabTrigger)`
  background-color: ${COLORS.main};
  margin-left: 20px;
`;

const StyledParticipantsTabTrigger = styled(StyledTabTrigger)`
  background-color: ${COLORS.sub_green};
`;

export const StyledTabContainer = styled.div`
  border-radius: 20px;
  width: 501px;
  height: 726px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TabContentBackground = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 450px;
  height: 672px;
  display: flex;
  flex-direction: column;
  padding: 0 33px;
`;
