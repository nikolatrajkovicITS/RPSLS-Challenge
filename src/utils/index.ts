import { Result, Shape } from '../types';
import { ME, COMPUTER, DRAW, WINNER, LOSER } from './constants';

export const shapes: Record<Shape, Partial<Record<Shape, string>>> = {
  scissors: { paper: 'cuts', lizard: 'decapitates' },
  paper: { rock: 'covers', spock: 'disproves' },
  rock: { lizard: 'crushes', scissors: 'crushes' },
  lizard: { spock: 'poisons', paper: 'eats' },
  spock: { scissors: 'smashes', rock: 'vaporizes' },
};

export const determineWinner = (playerOne: Shape, playerTwo: Shape): Result => {
  if (shapes[playerOne][playerTwo]) {
    return ME;
  } else if (shapes[playerTwo][playerOne]) {
    return COMPUTER;
  }

  return DRAW;
};

export const mapResultToClassName = (gameWinner: Result): string => {
  if (gameWinner === DRAW) {
    return DRAW;
  }
  return gameWinner === ME ? WINNER : LOSER;
};
