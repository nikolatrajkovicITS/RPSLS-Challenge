import { FC } from 'react';

import { Choice } from '../../../types';
import ChoiceButton from './ChoiceButton';

interface ChoicesContainerProps {
  choices: Choice[];
  onChoiceClick: (choice: Choice) => void;
}

const ChoicesContainer: FC<ChoicesContainerProps> = ({
  choices,
  onChoiceClick,
}) => {
  if (!choices || choices.length === 0) {
    return <p>No choices available.</p>;
  }

  return (
    <div className="choices-container">
      {choices.map(choice => (
        <ChoiceButton
          className="choice-button"
          key={choice.id}
          choice={choice}
          onClick={() => onChoiceClick(choice)}
        />
      ))}
    </div>
  );
};

export default ChoicesContainer;
