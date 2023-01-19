import { AxiosResponse } from 'axios';

import { publicApi } from 'api';
import { UserInfo } from './types';

export const fetchUsers = async (users: Array<{ id: string; userId: string }>) => {
  const userData: Array<UserInfo> = [];

  for (const { userId } of users) {
    const {
      data: { image, fullName: userName },
    }: AxiosResponse = await publicApi.get(`/users/${userId}`);
    userData.push({ image: image ?? null, userId, userName });
  }

  return userData;
};
