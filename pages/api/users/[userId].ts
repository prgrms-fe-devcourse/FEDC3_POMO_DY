import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';
import { publicApi } from 'api';

export default async function getProfile(request: NextApiRequest, response: NextApiResponse) {
  const {
    query: { userId },
  } = request;

  try {
    const { data }: AxiosResponse = await publicApi.get(`/users/${userId}`);
    return response.status(200).end(JSON.stringify(data));
  } catch (err) {
    return response.status(500).end(JSON.stringify(err));
  }
}
