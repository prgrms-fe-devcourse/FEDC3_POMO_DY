import styled from '@emotion/styled';

import PostCreate from '@components/postCreate/index';
import { usePostCreateForm } from '@components/postCreate/hooks/usePostCreateForm';

function PostCreatePage() {
  const TMP_CHANNEL_ID = '63c22e612358f16faf4df033';
  const {
    form,
    onChange: handleChange,
    onSubmit: handleSubmit,
  } = usePostCreateForm({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    interval: 0,
    content: '',
    channelId: TMP_CHANNEL_ID,
  });

  // TODO: Input 유효성 검사

  return (
    <Container>
      <PostCreate values={form} onChange={handleChange} onCreate={handleSubmit} />
    </Container>
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
