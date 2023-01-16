import styled from '@emotion/styled';
import * as Tabs from '@radix-ui/react-tabs';
import React, { useState } from 'react';
import { COLORS } from 'styles/colors';
import RefreshIcon from 'public/icons/circle_arrow.svg';
import CommentList from './CommentList';
import ParticipantList from './ParticipantList';
import { usePostComment } from '../hooks/queries';
import { useRouter } from 'next/router';

export default function PostTabs() {
  const [commentValue, setCommentValue] = useState('');
  const { mutate: postComment } = usePostComment();
  const router = useRouter();
  const { postId } = router.query;

  const onChangeCommentValue = (e: React.ChangeEvent<HTMLInputElement>) => setCommentValue(e.target.value);
  const onSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postComment({ postId: postId as string, comment: commentValue });
    setCommentValue('');
  };

  return (
    <Tabs.Root defaultValue="comments">
      <Tabs.List>
        <StyledCommentsTabTrigger value="comments">댓글</StyledCommentsTabTrigger>
        <StyledParticipantsTabTrigger value="participants">참여자</StyledParticipantsTabTrigger>
      </Tabs.List>
      <Tabs.Content value="comments">
        <StyledCommentsTabContainer>
          <Background>
            <RefreshButton>
              <RefreshIcon />
            </RefreshButton>
            <CommentList />
            <CommentForm onSubmit={onSubmitComment}>
              <CommentInput onChange={onChangeCommentValue} value={commentValue} placeholder="댓글을 입력하세요" />
              <CommentSubmitButton>완료</CommentSubmitButton>
            </CommentForm>
          </Background>
        </StyledCommentsTabContainer>
      </Tabs.Content>
      <Tabs.Content value="participants">
        <StyledParticipantsTabContainer>
          <Background>
            <ParticipantList />
          </Background>
        </StyledParticipantsTabContainer>
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

const StyledTabContainer = styled.div`
  border-radius: 20px;
  width: 501px;
  height: 726px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCommentsTabContainer = styled(StyledTabContainer)`
  background-color: ${COLORS.main};
`;

const StyledParticipantsTabContainer = styled(StyledTabContainer)`
  background-color: ${COLORS.sub_green};
`;

const Background = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 450px;
  height: 672px;
  display: flex;
  flex-direction: column;
  padding: 0 33px;
`;

const RefreshButton = styled.button`
  border-radius: 28px;
  background-color: ${COLORS.main};
  padding: 8px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  margin-top: 20px;
`;

const CommentForm = styled.form`
  position: relative;
  margin-bottom: 15px;
`;

const CommentInput = styled.input`
  border: 2px solid #d9d9d9;
  border-radius: 11px;
  padding: 12px 58px 12px 19px;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #838383;
  width: 100%;
`;

const CommentSubmitButton = styled.button`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: ${COLORS.main};
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 14px;
  background-color: transparent;
`;
