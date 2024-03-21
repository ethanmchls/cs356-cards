import React, { useState } from 'react';
import GameList from './GameList';
import gameData from './gameData';
import gameCategories from './categories';

export const GameView = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [minAge, setMinAge] = useState('');
  const [groupSize, setGroupSize] = useState(0);

  const handleClearMinAge = () => {
    setMinAge('');
  };

  const handleGroupSizeChange = (e) => {
    setGroupSize(parseInt(e.target.value));
  };

  const filteredGames = gameData.filter((game) => {
    return (
      (!selectedCategory || game.category === selectedCategory) &&
      (!minAge || game.ageMin <= minAge) &&
      (groupSize === 0 || (groupSize >= game.playerMin && groupSize <= game.playerMax))
    );
  });

  const categories = gameCategories.map((category) => category.category);

  return (
    <div className="container mx-auto p-4 h-screen">

      <div className="navbar bg-base-300 rounded-box mb-4">
        <div className="flex-1 px-2 lg:flex-none text-lg font-bold">Game Night</div> 
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-stretch">
            <div className="flex flex-col w-full mx-2 items-center">
              <label className="text-xs">Group Size</label>
              <input type="range" min={1} max={9} value={groupSize} className="range range-secondary range-sm" step={1} onChange={handleGroupSizeChange} />
              <div className="w-full flex justify-between text-xs px-2">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>+</span>
              </div>
            </div>
            <label className="input input-bordered input-secondary flex items-center gap-2">
              <input
                type="text"
                className="grow w-20"
                placeholder="Min Age"
                value={minAge}
                onChange={(e) => setMinAge(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-x cursor-pointer"
                viewBox="0 0 16 16"
                onClick={handleClearMinAge}
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
            </label>
            <select onChange={(e) => setSelectedCategory(e.target.value)} className="select select-secondary w-full max-w-xs ml-2">
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <GameList games={filteredGames} />
    </div>
  );
}