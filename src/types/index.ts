export type Shape = 'scissors' | 'paper' | 'rock' | 'lizard' | 'spock';

export type Choice = Shape;

export type Player = 'Computer' | 'Me';

export type Result = Player | 'Draw';

export type Game = {
  winner: Result;
  computerChoice: Shape;
  myChoice: Shape;
};
