import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';

import { publicApi } from 'api';

export default async function users(_request: NextApiRequest, response: NextApiResponse) {
  try {
    const { data }: AxiosResponse = await publicApi.get('/users/get-users');

    return response.status(200).end(JSON.stringify(data));
  } catch (err) {
    return response.status(500).end(JSON.stringify(err));
  }
}
