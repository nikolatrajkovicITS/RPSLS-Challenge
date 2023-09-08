import type { NextApiRequest, NextApiResponse } from 'next';

type GameResult = 'tie' | 'win' | 'lose';

interface GameResponse {
  results: GameResult;
  player: number;
  computer: number;
}

interface ErrorResponse {
  error: string;
}

type HandlerResponse = GameResponse | ErrorResponse;

const rules: { [key: number]: number[] } = {
  1: [3, 4], // Rock crushes Scissors and Rock crushes Lizard
  2: [1, 5], // Paper covers Rock and Paper disproves Spock
  3: [2, 4], // Scissors cuts Paper and Scissors decapitates Lizard
  4: [2, 5], // Lizard eats Paper and Lizard poisons Spock
  5: [1, 3], // Spock vaporizes Rock and Spock smashes Scissors
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<HandlerResponse>,
) {
  const { player_choice_id, computer_choice_id } = req.body;

  const player = Number(player_choice_id);
  const computer = Number(computer_choice_id);

  if (
    ![1, 2, 3, 4, 5].includes(player) ||
    ![1, 2, 3, 4, 5].includes(computer)
  ) {
    res.status(400).json({ error: 'Invalid choice ID' });
    return;
  }

  if (player === computer) {
    res.status(200).json({ results: 'tie', player, computer });
    return;
  }

  if (rules[player].includes(computer)) {
    res.status(200).json({ results: 'win', player, computer });
    return;
  }

  res.status(200).json({ results: 'lose', player, computer });
}
