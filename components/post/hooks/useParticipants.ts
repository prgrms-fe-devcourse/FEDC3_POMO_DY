import { PostContext } from '@pages/post/[categoryId]/[postId]';
import { useContext } from 'react';

export default function useParticipants() {
  const post = useContext(PostContext);

  return post.participants;
}
