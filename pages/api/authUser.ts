import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';
import { publicApi } from 'api';

export default async function authUser(request: NextApiRequest, response: NextApiResponse) {
  const { body } = request;
  try {
    const { data }: AxiosResponse = await publicApi.get('/auth-user', {
      headers: {
        Authorization: `Bearer ${body}`,
      },
    });
    if (!data._id) {
      return response.status(404).end('옳바르지 않은 토큰입니다.');
    }

    return response.status(200).send(JSON.stringify(data));
  } catch (err) {
    return response.status(500).end(JSON.stringify(err));
  }
}
