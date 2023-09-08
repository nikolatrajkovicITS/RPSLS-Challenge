import { FC } from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
  iconClass?: string;
}

const Button: FC<ButtonProps> = ({ label, onClick, iconClass, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {iconClass && <i className={iconClass}></i>} {label}
    </button>
  );
};

export default Button;
