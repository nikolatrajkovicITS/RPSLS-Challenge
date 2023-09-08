import { useState, useEffect } from 'react';
import { Choice, GameResult } from '../types';
import config from '../../config';

const BASE_URL = config.API_BASE_URL;

interface GamePlayResponse {
  results: GameResult;
  player: number;
  computer: number;
}

interface GameService {
  choices: Choice[];
  randomChoice: Choice | null;
  fetchRandomChoice: () => Promise<Choice>;
  fetchRandomNumber: () => Promise<number>;
  playGame: (
    playerChoiceId: number,
    computerChoiceId: number,
  ) => Promise<GamePlayResponse>;
}

export const useGameService = (): GameService => {
  const [choices, setChoices] = useState<Choice[]>([]);
  const [randomChoice, setRandomChoice] = useState<Choice | null>(null);

  useEffect(() => {
    fetch(`${BASE_URL}/choices`)
      .then(response => response.json())
      .then((data: Choice[]) => setChoices(data))
      .catch(error => console.error('Error fetching choices:', error));
  }, []);

  const fetchRandomChoice = async (): Promise<Choice> => {
    try {
      const response = await fetch(`${BASE_URL}/choice`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: Choice = await response.json();
      setRandomChoice(data);

      return data;
    } catch (error) {
      console.error('Error fetching random choice:', error);
      throw error;
    }
  };

  const fetchRandomNumber = async (): Promise<number> => {
    try {
      const response = await fetch(`${BASE_URL}/random`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: { random_number: number } = await response.json();

      return data.random_number;
    } catch (error) {
      console.error('Error fetching random number:', error);
      throw error;
    }
  };

  const playGame = async (
    playerChoiceId: number,
    computerChoiceId: number,
  ): Promise<GamePlayResponse> => {
    try {
      const response = await fetch(`${BASE_URL}/play`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          player_choice_id: playerChoiceId,
          computer_choice_id: computerChoiceId,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data: GamePlayResponse = await response.json();

      return data;
    } catch (error) {
      console.error('Error playing game:', error);
      throw error;
    }
  };

  return {
    choices,
    randomChoice,
    fetchRandomChoice,
    fetchRandomNumber,
    playGame,
  };
};
