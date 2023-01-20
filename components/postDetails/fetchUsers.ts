import { AxiosResponse } from 'axios';

import { publicApi } from 'api';
import { UserInfo } from './types';

interface Like {
  _id: string;
  user: string;
  post: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
}

export const fetchUsers = async (users: Array<Like>) => {
  const userData: Array<UserInfo> = [];

  for (const { user } of users) {
    const {
      data: { image, fullName: userName },
    }: AxiosResponse = await publicApi.get(`/users/${user}`);
    userData.push({ image: image ?? null, userId: user, userName });
  }

  return userData.filter((item, i) => userData.findIndex((item2) => item.userId === item2.userId) === i);
};
