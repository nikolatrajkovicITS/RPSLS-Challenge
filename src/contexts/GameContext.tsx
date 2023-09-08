import { FC, ReactNode, createContext, useContext, useState } from 'react';
import { Game } from '../types';

interface GameContextProps {
  games: Game[];
  addGame: (game: Game) => void;
  resetGames: () => void;
  score: { player: number; computer: number };
  setScore: (score: { player: number; computer: number }) => void;
  round: number;
  setRound: (round: number) => void;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const useGameContext = (): GameContextProps => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};

interface GameState {
  games: Game[];
  score: { player: number; computer: number };
  round: number;
}

export const GameProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const initialState: GameState = {
    games: [],
    score: { player: 0, computer: 0 },
    round: 1,
  };

  const [gameState, setGameState] = useState<GameState>(initialState);

  const addGame = (newGame: Game) => {
    setGameState(prevState => ({
      ...prevState,
      games: [...prevState.games, newGame],
    }));
  };

  const resetGames = () => {
    setGameState(initialState);
  };

  const setScore = (score: { player: number; computer: number }) => {
    setGameState(prevState => ({ ...prevState, score }));
  };

  const setRound = (round: number) => {
    setGameState(prevState => ({ ...prevState, round }));
  };

  return (
    <GameContext.Provider
      value={{
        games: gameState.games,
        addGame,
        resetGames,
        score: gameState.score,
        setScore,
        round: gameState.round,
        setRound,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
