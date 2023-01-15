import { isCategoryNameInDB } from './../components/post/types';
import { CategoryNameMap } from '@components/post/constants';
import { axiosInstance } from 'api';

export const getPost = async (id: string) => {
  const { data } = await axiosInstance.request({
    method: 'GET',
    url: `/posts/${id}`,
  });

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

  return post;
};
