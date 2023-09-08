import { FC, useMemo } from 'react';
import { useRouter } from 'next/router';
import { useGameContext } from '../../contexts/GameContext';
import LinkButton from './LinkButton';
import Button from './Button';

const NavigationButtons: FC = () => {
  const router = useRouter();
  const { resetGames } = useGameContext();

  const isHistoryPage = useMemo(
    () => router.pathname === '/history',
    [router.pathname],
  );

  const resetScore = () => {
    resetGames();
  };

  return (
    <div className="nav-buttons">
      {isHistoryPage ? (
        <LinkButton
          href="/play"
          label="Back to Game"
          className="nav-button"
          iconClass="fas fa-arrow-left"
        />
      ) : (
        <LinkButton
          href="/history"
          label="History"
          className="nav-button"
          iconClass="fas fa-history"
        />
      )}

      <Button
        label="Reset"
        onClick={resetScore}
        className="nav-button"
        iconClass="fas fa-redo-alt"
      />

      <LinkButton
        href="/"
        label="Exit"
        className="nav-button"
        iconClass="fas fa-sign-out-alt"
      />
    </div>
  );
};

export default NavigationButtons;
