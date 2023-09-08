import { FC } from 'react';
import Link from 'next/link';

interface LinkButtonProps {
  href: string;
  label: string;
  iconClass?: string;
  className?: string;
}

const LinkButton: FC<LinkButtonProps> = ({
  href,
  label,
  iconClass,
  className = '',
}) => {
  return (
    <Link href={href} className={className}>
      {iconClass && <i className={iconClass}></i>}
      {label}
    </Link>
  );
};

export default LinkButton;
