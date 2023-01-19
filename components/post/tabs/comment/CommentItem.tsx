import styled from '@emotion/styled';
import EmptyProfileImage from 'public/icons/profile.svg';

interface CommentItemProps {
  comment: string;
}

export default function CommentItem({ comment }: CommentItemProps) {
  return (
    <Container>
      <EmptyProfileImage />
      <Comment>{comment}</Comment>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

const Comment = styled.div`
  width: calc(100% - 73px);
  background-color: #d9d9d9;
  border-radius: 20px;
  padding: 16px 20px;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #000000;
  display: flex;
  align-items: center;
`;
