import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';

import { publicApi } from 'api';

interface Result {
  _id: string;
  role?: string;
  title?: string;
  email?: string;
  fullName?: string;
  channel?: string;
}

function exception(isUser: boolean, isPost: boolean) {
  if (isUser && isPost) {
    throw new Error("can't be User and Post at the same time");
  } else if (!isUser && !isPost) {
    throw new Error('must be User or Post');
  }
}

export default async function searchKeyword(request: NextApiRequest, response: NextApiResponse) {
  const {
    query: { keyword },
  } = request;
  try {
    const keywordStr = String(keyword);
    const { data }: AxiosResponse = await publicApi.get(`/search/all/${encodeURIComponent(keywordStr)}`);
    const results = data
      .map((result: Result) => {
        const isUser = result.email !== undefined && result.fullName !== undefined;
        const isPost = result.title !== undefined && result.channel !== undefined;
        exception(isUser, isPost);

        if (isUser) {
          const { _id, fullName, role } = result;
          return {
            _id,
            fullName,
            role,
          };
        } else {
          const customData = result.title ? JSON.parse(result.title) : {};
          return {
            _id: result._id,
            channelId: result.channel,
            ...customData,
          };
        }
      })
      .filter(
        (info: Result) =>
          (info.role && info.role !== 'SuperAdmin' && info.fullName && info.fullName.includes(keywordStr)) ||
          (info.title && info.title.includes(keywordStr)),
      );
    return response.status(200).send(results.slice(0, 15));
  } catch (err) {
    return response.status(500).end(JSON.stringify(err));
  }
}
