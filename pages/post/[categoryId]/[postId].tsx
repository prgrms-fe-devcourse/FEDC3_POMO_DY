import { AuthRequired } from '@components/auth/authrequire';
import { DEFAULT_POST } from '@components/post/constants';
import { useGetPost } from '@components/post/hooks/queries';
import PostInfo from '@components/post/info';
import PostTabs from '@components/post/tabs';
import Time from '@components/post/time';
import { Post, PomoStatus } from '@components/post/types';
import Waiting from '@components/post/waiting';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import { COLORS } from 'styles/colors';

export const PostContext = React.createContext<Post>(DEFAULT_POST);

export default function PostPage() {
  const router = useRouter();
  const { postId } = router.query;
  const { data: postData } = useGetPost(postId as string);
  const [status, setStatus] = useState<PomoStatus>('waiting');
  const [count, setCount] = useState(0);

  const startTime = useMemo<Date | undefined>(() => {
    if (!postData) return;
    const [year, month, day] = postData?.date.split('-');
    const [hour, minute] = postData?.startTime.split(':');
    return new Date(+year, +month - 1, +day, +hour, +minute);
  }, [postData]);

  // FIXME: 시간 관련 기능 구현할 동안은 계속 두겠습니다.
  // const testTime = new Date(2023, 0, 20, 21, 31);
  // testTime.setMinutes(testTime.getMinutes() + 1);
  // console.log('testTIme', testTime);

  const startFocus = () => setStatus('focus');
  const startRest = () => setStatus('rest');
  const finish = () => setStatus('finished');
  const onExit = () => {
    if (status === 'waiting') {
      // FIXME: 모달 컴포넌트 사용하기
      alert('뽀모도로 방에서 나가시겠습니까?');
    } else if (status === 'focus' || status === 'rest') {
      alert('뽀모도로 방에서 나가시겠습니까? 다시 들어올 수 없습니다.');
    }
    if (typeof window !== undefined) {
      // FIXME: 글 목록 페이지 url로 바꿔야 함
      window.history.back();
    }
  };
  const increaseCount = () => setCount((prev) => prev + 1);

  return (
    <AuthRequired>
      <Container>
        {postData && (
          <>
            <PostContext.Provider value={postData}>
              <div>
                <StyledPostInfo postInfo={postData} count={count} />
                {startTime && (
                  <Time
                    startTime={startTime}
                    iteration={postData.iteration}
                    status={status}
                    startRest={startRest}
                    startFocus={startFocus}
                    finish={finish}
                    increaseCount={increaseCount}
                  />
                )}
                <ExitButton onClick={onExit}>나가기</ExitButton>
              </div>
              <StyledPostTabs status={status} />
            </PostContext.Provider>
            {status === 'waiting' && startTime && (
              <Waiting targetTime={startTime} finish={startFocus}>
                <ExitButton onClick={onExit}>나가기</ExitButton>
              </Waiting>
            )}
          </>
        )}
      </Container>
    </AuthRequired>
  );
}

const Container = styled.div`
  display: flex;
  gap: 151px;
  justify-content: center;
  align-items: center;
`;

const ExitButton = styled.button`
  border-radius: 28px;
  background-color: ${COLORS.main};
  padding: 9px 24px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  margin-top: 36px;
`;

const StyledPostInfo = styled(PostInfo)`
  margin-top: 28px;
`;

const StyledPostTabs = styled(PostTabs)`
  margin-top: 49px;
`;
