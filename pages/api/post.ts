import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';

import { publicApi } from 'api';
import { isCategoryNameInDB } from '@components/post/types';
import { CATEGORY_NAME_MAP } from '@components/post/constants';

export default async function getPost(request: NextApiRequest, response: NextApiResponse) {
  const { body: postId } = request;

  try {
    const { data }: AxiosResponse = await publicApi.get(`/posts/${postId}`);

    const categoryNameInDB = data.channel.name;
    if (!isCategoryNameInDB(categoryNameInDB)) throw new Error('잘못된 카테고리입니다.');

    if (!Array.isArray(data.comments)) throw new Error('잘못된 댓글 목록입니다.');

    const post = {
      id: data._id,
      category: {
        id: data.channel._id,
        name: CATEGORY_NAME_MAP[categoryNameInDB],
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      comments: data.comments.map((comment: any) => ({ id: comment._id, content: comment.comment })),
      ...JSON.parse(data.title),
    };

    return response.status(200).end(JSON.stringify(post));
  } catch (err) {
    return response.status(500).end(JSON.stringify(err));
  }
}
