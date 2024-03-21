import React from 'react';

const GameList = ({ games }) => {
  return (
    <div className="flex flex-wrap">
      {games.map((game) => (
        <div className="card max-w-[250px] bg-base-100 shadow-lg">
          <figure><img src={`${game.image}`} alt="Shoes" /></figure>
          <div className="card-body">
            <div className="card-title text-lg">{game.name}</div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{game.ageMin}+</div> 
              <div className="badge badge-outline">{game.playerMin}-{game.playerMax}</div>
              <div className="badge badge-secondary">{game.rating}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;
