import type { NextApiRequest, NextApiResponse } from 'next';

interface Choice {
  id: number;
  name: string;
}

const choices: Choice[] = [
  { id: 1, name: 'rock' },
  { id: 2, name: 'paper' },
  { id: 3, name: 'scissors' },
  { id: 4, name: 'lizard' },
  { id: 5, name: 'spock' },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Choice>,
) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  res.status(200).json(choices[randomIndex]);
}
