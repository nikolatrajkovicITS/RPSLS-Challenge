import { FC } from 'react';

interface MatchStatisticsProps {
  gameStatus?: string;
  score?: {
    player?: number;
    computer?: number;
  };
}

const MatchStatistics: FC<MatchStatisticsProps> = ({
  gameStatus = 'In progress',
  score = { player: 0, computer: 0 },
}) => {
  const { player = 0, computer = 0 } = score;

  return (
    <div className="match-container">
      <div className="match-heading">Player vs Computer</div>

      <div className="game-status">{gameStatus}</div>

      <div className="match-statistics">
        <span className="player-score">{player}</span>
        <span className="separator">:</span>
        <span className="computer-score">{computer}</span>
      </div>
    </div>
  );
};

export default MatchStatistics;
