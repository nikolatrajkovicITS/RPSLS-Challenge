import React from 'react';
import { Game } from '../types';
import { mapResultToClassName } from '../utils';

interface ScoreBoardProps {
  games: Game[];
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ games }) => {
  const lastTenGames = games.slice(0, 10);

  return (
    <div>
      <h2>Computer vs Me</h2>
      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Winner</th>
            <th>Computer Choice</th>
            <th>My Choice</th>
          </tr>
        </thead>
        <tbody>
          {lastTenGames.map(({ winner, computerChoice, myChoice }, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className={mapResultToClassName(winner)}>{winner}</td>
              <td>{computerChoice}</td>
              <td>{myChoice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScoreBoard;
