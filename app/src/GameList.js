import React from 'react';
import GameCard from './GameCard';

const GameList = ({ games }) => {
  return (
    <div className="flex flex-wrap">
      {games.map((game) => (
        <GameCard key={game.name} {...game} />
      ))}
    </div>
  );
};

export default GameList;
