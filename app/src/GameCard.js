import React from 'react';

const GameCard = ({ name, image }) => {
  return (
    <div className="bg-white p-4 m-2 w-1/5 rounded shadow">
      <h3 className="text-xl font-bold">{name}</h3>
      <img src={image} alt={name} className="w-1/2 mx-auto" />
    </div>
  );
};

export default GameCard;
