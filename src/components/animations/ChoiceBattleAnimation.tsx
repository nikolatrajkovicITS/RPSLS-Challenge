import { FC } from 'react';

import { Choice } from '../../types';
import BattleAnimation from './BattleAnimation';
import ChoiceButton from '../game/ChoicesContainer/ChoiceButton';

interface ChoiceBattleAnimationProps {
  playerChoice: Choice;
  computerChoice: Choice;
}

const ChoiceBattleAnimation: FC<ChoiceBattleAnimationProps> = ({
  playerChoice,
  computerChoice,
}) => {
  return (
    <div className="battle-display">
      <ChoiceButton choice={playerChoice} className="player-choice" />

      <BattleAnimation />

      <ChoiceButton choice={computerChoice} className="player-choice" />
    </div>
  );
};

export default ChoiceBattleAnimation;
