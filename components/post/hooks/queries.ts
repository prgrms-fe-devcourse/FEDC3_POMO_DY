import { axiosInstance } from 'api';
import { AxiosResponse } from 'axios';
import { useMutation, useQuery } from 'react-query';
import { Post } from '../types';

export const useGetPost = (id: string) =>
  useQuery<AxiosResponse<Post, unknown>, unknown, Post, string[]>(
    ['post_getPost', id],
    async () => {
      const { data } = await axiosInstance.get(`/api/${id}`);
      return data;
    },
    { enabled: !!id },
  );

export const usePostComment = () =>
  useMutation(async ({ comment, postId }: { comment: string; postId: string }) => {
    const response = await axiosInstance.post('/api/comments/create', { comment, postId });
    return response;
  });
