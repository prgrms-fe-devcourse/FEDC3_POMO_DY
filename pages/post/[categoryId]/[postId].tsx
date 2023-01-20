import { DEFAULT_POST } from '@components/post/constants';
import { useGetPost } from '@components/post/hooks/queries';
import useCountDown from '@components/post/hooks/useWaitingTimer';
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
  const [timeStatus, setTimeStatus] = useState<PomoStatus>('focus');
  const [isWaiting, setIsWaiting] = useState(true);

  const startTime = useMemo<Date | undefined>(() => {
    if (!postData) return;
    const [year, month, day] = postData?.date.split('-');
    const [hour, minute] = postData?.startTime.split(':');
    return new Date(+year, +month, +day, +hour, +minute);
  }, [postData]);

  // FIXME: 시간 관련 기능 구현할 동안은 계속 두겠습니다.
  // const testTime = new Date();
  // testTime.setMinutes(7);
  // const testIsWaiting = false;

  const finishWaiting = () => {
    setIsWaiting(false);
  };

  return (
    <div>
      {postData && (
        <>
          <PostContext.Provider value={postData}>
            <PostInfo postInfo={postData} />
            <PostTabs />
            <Time status={timeStatus} />
          </PostContext.Provider>
          {isWaiting && startTime && <Waiting targetTime={startTime} finish={finishWaiting} />}
        </>
      )}
    </div>
  );
}
