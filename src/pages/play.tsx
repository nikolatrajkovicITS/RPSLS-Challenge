import { useEffect, useState } from 'react';

import GameBoard from '../components/game/GameBoard';
import GameLoader from '../components/animations/GameLoader';

function PlayPage() {
  const [showLoader, setShowLoader] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  return showLoader ? <GameLoader /> : <GameBoard />;
}

export default PlayPage;
