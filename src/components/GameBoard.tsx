import { useState } from 'react';
import { Choice } from '../types';
import ChoiceButton from './ChoiceButton';
import { shapes } from '../utils';

const GameBoard: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [gameStatus, setGameStatus] = useState<string>('Choose your move!');

  const handleChoice = (choice: Choice) => {
    setPlayerChoice(choice);
    setGameStatus(`You chose ${choice}.`);
  };

  return (
    <div>
      <div className="container">
        {Object.keys(shapes).map(choice => (
          <ChoiceButton
            key={choice}
            choice={choice as Choice}
            onClick={handleChoice}
          />
        ))}
      </div>

      <div className="game-status">{gameStatus}</div>
    </div>
  );
};

export default GameBoard;
