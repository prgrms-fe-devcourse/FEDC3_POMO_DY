import { DEFAULT_POST } from '@components/post/constants';
import { useGetPost } from '@components/post/hooks/queries';
import PostInfo from '@components/post/info';
import PostTabs from '@components/post/tabs';
import Time from '@components/post/time';
import { Post } from '@components/post/types';
import Waiting from '@components/post/waiting';
import { useRouter } from 'next/router';
import React from 'react';

export const PostContext = React.createContext<Post>(DEFAULT_POST);

export default function PostPage() {
  const router = useRouter();
  const { postId } = router.query;
  const { data: PostData } = useGetPost(postId as string);

  return (
    <div>
      {PostData && (
        <PostContext.Provider value={PostData}>
          <PostInfo postInfo={PostData} />
          <PostTabs />
          <Time status="rest" />
        </PostContext.Provider>
      )}
      <Waiting />
    </div>
  );
}
