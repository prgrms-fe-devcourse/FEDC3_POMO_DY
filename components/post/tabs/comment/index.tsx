import styled from '@emotion/styled';
import { COLORS } from 'styles/colors';
import { StyledTabContainer, TabContentBackground } from '..';
import RefreshIcon from 'public/icons/circle_arrow.svg';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { usePostComment } from '@components/post/hooks/queries';
import CommentItem from './CommentItem';

export default function CommentTapContent() {
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
    <StyledCommentsTabContainer>
      <TabContentBackground>
        <RefreshButton>
          <RefreshIcon />
        </RefreshButton>
        <CommentList>
          <CommentItem />
        </CommentList>
        <CommentForm onSubmit={onSubmitComment}>
          <CommentInput onChange={onChangeCommentValue} value={commentValue} placeholder="댓글을 입력하세요" />
          <CommentSubmitButton>완료</CommentSubmitButton>
        </CommentForm>
      </TabContentBackground>
    </StyledCommentsTabContainer>
  );
}

const StyledCommentsTabContainer = styled(StyledTabContainer)`
  background-color: ${COLORS.main};
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

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  height: 100%;
`;
