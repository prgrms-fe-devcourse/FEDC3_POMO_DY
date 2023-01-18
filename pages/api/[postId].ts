import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';

import { publicApi } from 'api';
import { isCategoryNameInDB } from '@components/post/types';
import { CategoryNameMap } from '@components/post/constants';

export default async function getPost(request: NextApiRequest, response: NextApiResponse) {
  const {
    query: { postId },
  } = request;

  try {
    const { data }: AxiosResponse = await publicApi.get(`/posts/${postId}`);

    const categoryNameInDB = data.channel.name;
    if (!isCategoryNameInDB(categoryNameInDB)) throw new Error('잘못된 카테고리입니다.');

    const post = {
      id: data._id,
      category: {
        id: data.channel._id,
        name: CategoryNameMap[categoryNameInDB],
      },
      ...JSON.parse(data.title),
    };

    return response.status(200).end(JSON.stringify(post));
  } catch (err) {
    return response.status(500).end(JSON.stringify(err));
  }
}
