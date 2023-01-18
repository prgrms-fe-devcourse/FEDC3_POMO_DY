import { CATEGORY_NAME_MAP } from '@components/post/constants';
import { isCategoryNameInDB, Post } from '@components/post/types';
import { publicApi } from 'api';
import axios from 'axios';

export const getPost = async (id: string) => {
  const { data } = await publicApi.request({
    method: 'GET',
    url: `/posts/${id}`,
  });

  const categoryNameInDB = data.channel.name;
  if (!isCategoryNameInDB(categoryNameInDB)) throw new Error('잘못된 카테고리입니다.');

  if (!Array.isArray(data.comments)) throw new Error('잘못된 댓글 목록입니다.');

  if (!Array.isArray(data.likes)) throw new Error('잘못된 참여자 목록입니다.');

  const participantIdList: string[] = data.likes
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .filter((like: any) => like.hasOwnProperty('user'))
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .filter((like: any) => typeof like.user === 'string')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .map((like: any) => like.user as string);
  const participants = await getParticipants(participantIdList);

  const post: Post = {
    id: data._id,
    category: {
      id: data.channel._id,
      name: CATEGORY_NAME_MAP[categoryNameInDB],
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    comments: data.comments.map((comment: any) => ({ id: comment._id, content: comment.comment })),
    participants,
    host: { id: data.author._id, name: data.author.fullName, image: data.author.image },
    ...JSON.parse(data.title),
  };

  return post;
};

export const getParticipants = async (idList: string[]) => {
  const requests = idList.map((id) => publicApi.get(`users/${id}`));

  const response = await axios.all(requests).then(
    axios.spread((...responses) => {
      return responses.map(({ data }) => ({
        id: data._id,
        name: data.fullName,
        image: data.image,
      }));
    }),
  );

  return response;
};
