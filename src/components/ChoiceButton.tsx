import Image from 'next/image';
import { Choice } from '../types';

interface ChoiceButtonProps {
  choice: Choice;
  onClick: (choice: Choice) => void;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({ choice, onClick }) => {
  return (
    <button
      className="choice-button"
      onClick={() => onClick(choice)}
      type="button"
    >
      <Image
        src={`/images/${choice}.png`}
        alt={choice}
        width={100}
        height={100}
      />
    </button>
  );
};

export default ChoiceButton;
