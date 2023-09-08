import { FC } from 'react';
import Image from 'next/image';

interface EmptyStateProps {
  imagePath: string;
  message: string;
}

const EmptyState: FC<EmptyStateProps> = ({ imagePath, message }) => {
  return (
    <div className="empty-state">
      <Image
        src={imagePath}
        alt="No Data Illustration"
        width={400}
        height={400}
      />
      <p className="empty-state-message">{message}</p>
    </div>
  );
};

export default EmptyState;
