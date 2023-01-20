import { publicApi } from './../../../api/index';
import { getPost } from 'api/post';
import { useMutation, useQuery } from 'react-query';

export const useGetPost = (id: string) =>
  useQuery(
    ['post_getPost', id],
    async () => {
      const data = await getPost(id);
      return data;
    },
    { enabled: !!id },
  );

export const usePostComment = () =>
  useMutation(async ({ comment, postId }: { comment: string; postId: string }) => {
    const response = await publicApi.post('/comments/create', { comment, postId });
    return response;
  });
