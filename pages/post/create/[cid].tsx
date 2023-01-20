import styled from '@emotion/styled';

import PostCreate from '@components/postCreate/index';
import { usePostCreateForm } from '@components/postCreate/hooks/usePostCreateForm';
import { useRouter } from 'next/router';
import { AuthRequired } from '@components/auth/authrequire';

function PostCreatePage() {
  const router = useRouter();
  const { cid } = router.query;
  const channelId = typeof cid !== 'string' ? '' : cid;

  const {
    form,
    onChange: handleChange,
    onSubmit: handleSubmit,
  } = usePostCreateForm({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    interval: 1,
    content: '',
    channelId,
  });

  // TODO: Input 유효성 검사

  return (
    channelId && (
      <AuthRequired>
        <Container>
          <PostCreate values={form} onChange={handleChange} onCreate={handleSubmit} />
        </Container>
      </AuthRequired>
    )
  );
}

const Container = styled.div({
  minWidth: '700px',
  height: 'calc(100vh - 100px)',
  minHeight: '600px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'scroll',
});

export default PostCreatePage;
