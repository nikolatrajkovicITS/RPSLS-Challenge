import { FC } from 'react';
import Image from 'next/image';

interface LogoProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

const Logo: FC<LogoProps> = ({
  src = '/images/logo.png',
  alt = 'Game Logo',
  width = 200,
  height = 200,
}) => {
  return (
    <div className="logo">
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default Logo;
