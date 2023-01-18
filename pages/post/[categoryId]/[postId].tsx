import { DEFAULT_POST } from '@components/post/constants';
import { useGetPost } from '@components/post/hooks/queries';
import PostInfo from '@components/post/info';
import PostTabs from '@components/post/tabs';
import { Post } from '@components/post/types';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

export const PostContext = React.createContext<Post>(DEFAULT_POST);

interface PostPageProps {
  post: Post;
}

export default function PostPage({ post }: PostPageProps) {
  const router = useRouter();
  const { postId } = router.query;
  // const { data } = useGetPost(postId as string);
  return (
    <PostContext.Provider value={post}>
      {post && <PostInfo postInfo={post} />}
      <PostTabs />
    </PostContext.Provider>
  );
}

interface Params extends ParsedUrlQuery {
  postId: string;
}

const isProduction = process.env.NODE_ENV === 'production';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { postId } = context.params as Params;
  const post = await fetch(
    `${isProduction ? 'https://fedc-3-pomo-dy.vercel.app' : 'http://localhost:3000'}/api/posts/${postId}`,
  );
  const data = await post.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: data as Post },
  };
};
