import { FC } from 'react';

const BattleAnimation: FC = () => {
  return (
    <div className="battle-animation">
      <div className="ls-particles ls-part-1"></div>
      <div className="ls-particles ls-part-2"></div>
      <div className="ls-particles ls-part-3"></div>
      <div className="ls-particles ls-part-4"></div>
      <div className="ls-particles ls-part-5"></div>
      <div className="lightsaber ls-left ls-green"></div>
      <div className="lightsaber ls-right ls-red"></div>
    </div>
  );
};

export default BattleAnimation;
