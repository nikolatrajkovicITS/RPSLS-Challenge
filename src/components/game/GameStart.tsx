import Logo from '../common/Logo';
import LinkButton from '../common/LinkButton';

function GameStart() {
  return (
    <div className="game-details">
      <Logo />
      <div className="game-title">Rock Paper Scissors Lizard Spock</div>

      <LinkButton href="/play" label="Start Game" className="start-button" />
    </div>
  );
}

export default GameStart;
