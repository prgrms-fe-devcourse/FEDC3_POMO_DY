import { getPost } from 'api/post';
import { useQuery } from 'react-query';
import { Post } from '../types';

export const useGetPost = (id: string) =>
  useQuery<string, unknown, Post, string[]>(
    ['post_getPost', id],
    async () => {
      const data = await getPost(id);
      return data;
    },
    { enabled: !!id },
  );
