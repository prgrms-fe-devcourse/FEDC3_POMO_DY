import { PostContext } from '@pages/post/[categoryId]/[postId]';
import { useContext } from 'react';

export default function useComments() {
  const post = useContext(PostContext);

  return post.comments;
}
