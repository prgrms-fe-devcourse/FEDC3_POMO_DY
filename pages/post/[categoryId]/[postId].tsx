import { DEFAULT_POST } from '@components/post/constants';
import { useGetPost } from '@components/post/hooks/queries';
import PostInfo from '@components/post/info';
import PostTabs from '@components/post/tabs';
import Time from '@components/post/time';
import { Post, PomoStatus } from '@components/post/types';
import Waiting from '@components/post/waiting';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';

export const PostContext = React.createContext<Post>(DEFAULT_POST);

export default function PostPage() {
  const router = useRouter();
  const { postId } = router.query;
  const { data: postData } = useGetPost(postId as string);
  const [status, setStatus] = useState<PomoStatus>('waiting');

  const startTime = useMemo<Date | undefined>(() => {
    if (!postData) return;
    const [year, month, day] = postData?.date.split('-');
    const [hour, minute] = postData?.startTime.split(':');
    return new Date(+year, +month, +day, +hour, +minute);
  }, [postData]);

  // FIXME: 시간 관련 기능 구현할 동안은 계속 두겠습니다.
  // const testTime = new Date(2023, 0, 20, 18, 58);
  // testTime.setMinutes(testTime.getMinutes() + 1);
  // console.log('testTIme', testTime);

  const startFocus = () => setStatus('focus');
  const startRest = () => setStatus('rest');
  const finish = () => setStatus('finished');
  const getTimeComponent = () => {
    switch (status) {
      case 'focus':
      case 'rest':
        return (
          startTime && (
            <Time
              startTime={startTime}
              iteration={1}
              status={status}
              startRest={startRest}
              startFocus={startFocus}
              finish={finish}
            />
          )
        );
      case 'finished':
        return <div>끝</div>;
      case 'waiting':
        return <div>대기 중</div>;
    }
  };

  return (
    <div>
      {postData && (
        <>
          <PostContext.Provider value={postData}>
            <PostInfo postInfo={postData} />
            <PostTabs />
            {getTimeComponent()}
          </PostContext.Provider>
          {status === 'waiting' && startTime && <Waiting targetTime={startTime} finish={startFocus} />}
        </>
      )}
    </div>
  );
}
