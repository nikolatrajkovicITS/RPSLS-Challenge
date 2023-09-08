export type Shape = 'scissors' | 'paper' | 'rock' | 'lizard' | 'spock';

export type Choice = {
  id: number;
  name: string;
};

export type Player = 'Computer' | 'Player';

export type Winner = Player | 'Tie';

export type GameResult = 'win' | 'lose' | 'tie';

export type Game = {
  winner: Winner;
  status: GameResult;
  computerChoice: Choice;
  playerChoice: Choice;
};
