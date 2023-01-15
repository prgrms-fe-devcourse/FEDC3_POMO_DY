import { useGetPost } from '@components/post/hooks/queries';
import PostInfo from '@components/post/info';
import PostTabs from '@components/post/tabs';
import { useRouter } from 'next/router';

export default function PostPage() {
  const router = useRouter();
  const { postId } = router.query;
  const { data } = useGetPost(postId as string);
  return (
    <div>
      {data && <PostInfo postInfo={data} />}
      <PostTabs />
    </div>
  );
}
