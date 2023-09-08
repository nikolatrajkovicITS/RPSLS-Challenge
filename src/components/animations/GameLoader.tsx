import { FC } from 'react';

const GameLoader: FC = () => {
  return (
    <div className="loader">
      <div className="loader_overlay"></div>

      <div className="loader_cogs">
        <div className="loader_cogs__top">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="top_part"></div>
          ))}
          <div className="top_hole"></div>
        </div>

        <div className="loader_cogs__left">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="left_part"></div>
          ))}
          <div className="left_hole"></div>
        </div>

        <div className="loader_cogs__bottom">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bottom_part"></div>
          ))}
          <div className="bottom_hole"></div>
        </div>

        <p>Loading...</p>
      </div>
    </div>
  );
};

export default GameLoader;
