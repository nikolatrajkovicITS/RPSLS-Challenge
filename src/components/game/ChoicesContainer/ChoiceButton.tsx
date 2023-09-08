import { FC } from 'react';

import Image from 'next/image';
import { Choice } from '../../../types';

interface ChoiceButtonProps {
  choice: Choice;
  className?: string;
  onClick?: (choice: Choice) => void;
}

const ChoiceButton: FC<ChoiceButtonProps> = ({
  choice,
  className = '',
  onClick,
}) => {
  return (
    <button className={className} onClick={() => onClick?.(choice)}>
      <Image
        src={`/images/${choice.name}.png`}
        alt={choice.name}
        width={80}
        height={80}
      />

      <p>{choice.name}</p>
    </button>
  );
};

export default ChoiceButton;
