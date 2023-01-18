import { PostContext } from '@pages/post/[categoryId]/[postId]';
import { useContext } from 'react';

export default function useHost() {
  const post = useContext(PostContext);

  return post.host;
}
