import { NextApiRequest, NextApiResponse } from 'next';

export default async function posts(_request: NextApiRequest, response: NextApiResponse) {
  return response.status(200).end();
}
