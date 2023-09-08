import { FC, useState } from 'react';

import { useGameService } from '../../hooks/useGameService';
import { useGameContext } from '../../contexts/GameContext';
import { createNewGame, getGameOutcome } from '../../utils';

import { Choice, GameResult } from '../../types';

import MatchStatistics from './MatchStatistics';
import ChoicesContainer from './ChoicesContainer/ChoicesContainer';
import ChoiceBattleAnimation from '../animations/ChoiceBattleAnimation';

const GameBoard: FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [gameStatus, setGameStatus] = useState<string>(
    'Game started! Make your move.',
  );
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);

  const { choices, randomChoice, fetchRandomChoice, playGame } =
    useGameService();
  const { addGame, score, setScore, round, setRound } = useGameContext();

  const processGameOutcome = (
    results: GameResult,
    selectedChoice: Choice,
    computerChoice: Choice,
  ) => {
    const newGame = createNewGame(results, computerChoice, selectedChoice);
    const { winner } = newGame;

    const { statusMessage, updatedScore } = getGameOutcome(
      winner,
      selectedChoice,
      computerChoice,
      score,
    );

    setScore(updatedScore);
    setGameStatus(statusMessage);
    setRound(round + 1);
    addGame(newGame);
    setIsPlaying(false);
  };

  const initiateGame = async (selectedChoice: Choice) => {
    setIsPlaying(true);
    setPlayerChoice(selectedChoice);
    setGameStatus(`Round ${round} Started - You chose ${selectedChoice.name}.`);

    try {
      const computerChoice = await fetchRandomChoice();
      const gameResult = await playGame(selectedChoice.id, computerChoice.id);

      setTimeout(() => {
        processGameOutcome(gameResult.results, selectedChoice, computerChoice);
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
      setGameStatus('An error occurred. Please try again.');
    }
  };

  const isBattleAnimationVisible = isPlaying && playerChoice && randomChoice;

  return (
    <>
      <MatchStatistics gameStatus={gameStatus} score={score} />

      {isBattleAnimationVisible ? (
        <ChoiceBattleAnimation
          playerChoice={playerChoice}
          computerChoice={randomChoice}
        />
      ) : (
        <ChoicesContainer choices={choices} onChoiceClick={initiateGame} />
      )}
    </>
  );
};

export default GameBoard;
