import { FC, useMemo } from 'react';
import { Game } from '../../types';

interface ScoreBoardProps {
  games: Game[];
}

const GameRow: FC<{ game: Game; index: number }> = ({ game, index }) => {
  const { status, winner, computerChoice, playerChoice } = game;

  return (
    <tr key={index}>
      <td>{index + 1}</td>
      <td className={status}>{winner}</td>
      <td>{playerChoice.name}</td>
      <td>{computerChoice.name}</td>
    </tr>
  );
};

const ScoreBoard: FC<ScoreBoardProps> = ({ games }) => {
  const lastTenGames = useMemo(() => {
    return games.slice(-10);
  }, [games]);

  return (
    <table>
      <thead>
        <tr>
          <th>Game</th>
          <th>Winner</th>
          <th>Player Choice</th>
          <th>Computer Choice</th>
        </tr>
      </thead>
      <tbody>
        {lastTenGames.map((game, index) => (
          <GameRow key={index} game={game} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default ScoreBoard;
