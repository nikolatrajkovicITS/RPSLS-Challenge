import { GameResult, Winner, Choice, Game } from '../types';
import { WIN, LOSE, TIE, PLAYER, COMPUTER, TIE_GAME } from './constants';

interface GameOutcome {
  statusMessage: string;
  updatedScore: { player: number; computer: number };
}

export const mapResultToClassName = (winner: Winner): string => {
  switch (winner) {
    case PLAYER:
      return WIN;
    case COMPUTER:
      return LOSE;
    case TIE_GAME:
      return TIE;
    default:
      throw new Error(`Invalid winner: ${winner}`);
  }
};

export const determineWinner = (gameResult: GameResult): Winner => {
  switch (gameResult) {
    case WIN:
      return PLAYER;
    case LOSE:
      return COMPUTER;
    case TIE:
      return TIE_GAME;
    default:
      throw new Error(`Invalid game result: ${gameResult}`);
  }
};

export const getGameOutcome = (
  winner: string,
  choice: Choice,
  computerChoice: Choice,
  score: { player: number; computer: number },
): GameOutcome => {
  let statusMessage = "It's a Tie!";
  const updatedScore = { ...score };

  if (winner === PLAYER) {
    updatedScore.player += 1;
    statusMessage = `You Won! ${choice.name} beats ${computerChoice.name}.`;
  } else if (winner === COMPUTER) {
    updatedScore.computer += 1;
    statusMessage = `You Lost! ${computerChoice.name} beats ${choice.name}.`;
  }

  return {
    statusMessage,
    updatedScore,
  };
};

export const createNewGame = (
  status: GameResult,
  computerChoice: Choice,
  choice: Choice,
): Game => {
  const winner = determineWinner(status);
  const newGame: Game = {
    winner,
    status,
    computerChoice: computerChoice,
    playerChoice: choice,
  };
  return newGame;
};
