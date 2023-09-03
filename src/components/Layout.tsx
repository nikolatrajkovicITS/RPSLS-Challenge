import React, { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <div className="title">Rock Paper Scissors Lizard Spock</div>
      <div className="game-board">{children}</div>
    </div>
  );
};

export default Layout;
