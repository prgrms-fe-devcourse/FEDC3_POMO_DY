import styled from '@emotion/styled';

import PostCreate from '@components/create';
import { FormEventHandler } from 'react';

function PostCreatePage() {
  const handleCreateSubmit: FormEventHandler = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // TODO: Input 유효성 검사
    // TODO: Time Interval에 따라 종료 시간 변경
    // TODO: post 생성 요청
  };

  return (
    <Container>
      <PostCreate onCreate={handleCreateSubmit} />
    </Container>
  );
}

const Container = styled.div({
  minWidth: '700px',
  height: '100vh',
  minHeight: '600px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'scroll',
});

export default PostCreatePage;
