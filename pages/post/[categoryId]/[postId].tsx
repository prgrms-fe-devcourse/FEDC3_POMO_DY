import { useGetPost } from '@components/post/hooks/queries';
import PostInfo from '@components/post/info';
import PostTabs from '@components/post/tabs';
import { Post } from '@components/post/types';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

interface PostPageProps {
  post: Post;
}

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
