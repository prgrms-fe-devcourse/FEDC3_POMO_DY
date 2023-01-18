import { NextApiRequest, NextApiResponse } from 'next';

export default async function posts(_request: NextApiRequest, response: NextApiResponse) {
  try {
    return response.status(500).end();
  } catch (err) {
    return response.status(500).end(JSON.stringify(err));
  }
}
