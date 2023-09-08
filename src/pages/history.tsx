import EmptyState from '../components/common/EmptyState';
import ScoreBoard from '../components/game/ScoreBoard';
import { useGameContext } from '../contexts/GameContext';

function HistoryPage() {
  const { games } = useGameContext();

  return (
    <div>
      {games.length === 0 ? (
        <EmptyState
          imagePath="/images/empty-state.jpg"
          message="Empty game history."
        />
      ) : (
        <ScoreBoard games={games} />
      )}
    </div>
  );
}

export default HistoryPage;
