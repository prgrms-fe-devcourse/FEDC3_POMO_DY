import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';

import { publicApi } from 'api';
import { PostType } from '@components/posts/types';

export default async function getPosts(request: NextApiRequest, response: NextApiResponse) {
  const {
    query: { categoryId },
  } = request;

  try {
    const { data }: AxiosResponse = await publicApi.get(`/posts/channel/${categoryId}`);

    const posts = data.map((post: PostType) => {
      return {
        _id: post._id,
        participants: post.likes,
        categoryName: post.channel.name,
        data: JSON.parse(post.title),
        createdAt: post.createdAt,
      };
    });

    return response.status(200).end(JSON.stringify(posts));
  } catch (err) {
    return response.status(500).end(JSON.stringify(err));
  }
}
