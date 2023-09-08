import type { NextApiRequest, NextApiResponse } from 'next';

interface RandomNumberResponse {
  random_number: number;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RandomNumberResponse>,
) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  res.status(200).json({ random_number: randomNumber });
}
