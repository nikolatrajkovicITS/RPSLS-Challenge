import GameBoard from '../components/GameBoard';
import Layout from '../components/Layout';
import ScoreBoard from '../components/ScoreBoard';
import { Game } from '../types';

const games: Game[] = [
  {
    winner: 'Computer',
    computerChoice: 'rock',
    myChoice: 'scissors',
  },
  {
    winner: 'Me',
    computerChoice: 'scissors',
    myChoice: 'rock',
  },
  {
    winner: 'Draw',
    computerChoice: 'paper',
    myChoice: 'paper',
  },
];

function GamePage() {
  return (
    <Layout>
      <>
        <GameBoard />
        <ScoreBoard games={games} />
      </>
    </Layout>
  );
}

export default GamePage;
