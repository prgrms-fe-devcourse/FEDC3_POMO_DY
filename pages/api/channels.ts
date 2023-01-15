import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';

import { publicApi } from 'api';

export default async function login(_request: NextApiRequest, response: NextApiResponse) {
  try {
    const { data }: AxiosResponse = await publicApi.get('/channels');

    return response.status(200).end(JSON.stringify(data));
  } catch (err) {
    return response.status(500).end(JSON.stringify(err));
  }
}
