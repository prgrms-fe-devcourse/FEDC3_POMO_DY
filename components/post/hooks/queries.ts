import { axiosInstance } from 'api';
import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { Post } from '../types';

export const useGetPost = (id: string) =>
  useQuery<AxiosResponse<Post, unknown>, unknown, Post, string[]>(
    ['post_getPost', id],
    async () => {
      const { data } = await axiosInstance.get(`/api/posts/${id}`);
      return data;
    },
    { enabled: !!id },
  );
