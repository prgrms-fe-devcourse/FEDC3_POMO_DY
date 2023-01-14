import styled from '@emotion/styled';
import CommentItem from './CommentItem';

export default function CommentList() {
  return (
    <Container>
      <CommentItem />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  height: 100%;
`;
