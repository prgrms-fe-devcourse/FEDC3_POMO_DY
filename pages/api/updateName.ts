import { NextApiRequest, NextApiResponse } from 'next';
import { AxiosResponse } from 'axios';
import { publicApi } from 'api';

export default async function updateName(request: NextApiRequest, response: NextApiResponse) {
  const { body, headers } = request;
  try {
    const { data }: AxiosResponse = await publicApi.put('/settings/update-user', body, { headers });
    return response.status(200).end(JSON.stringify(data));
  } catch (err) {
    return response.status(500).end(JSON.stringify(err));
  }
}
