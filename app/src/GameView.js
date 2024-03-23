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

  const handleResetGroupSize = () => {
    setGroupSize(0);
  }

  const filteredGames = gameData.filter((game) => {
    return (
      (!selectedCategory || game.category === selectedCategory) &&
      (!minAge || game.ageMin <= minAge) &&
      (groupSize === 0 || (groupSize >= game.playerMin && groupSize <= game.playerMax))
    );
  });

  const categories = gameCategories.map((category) => category.category);

  return (
    <div className="container mx-auto pt-4 w-screen h-screen flex flex-col">
      <div className="navbar bg-base-300 rounded-box sticky top-0 z-10 min-h-24">
        <div className="flex-1 px-2 lg:flex-none font-bold xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl">
          Game Night
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="mx-3 bi bi-dice-5 xl:w-12 lg:w-10 md:w-8 w-4 hover:animate-spin" viewBox="0 0 16 16">
            <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"/>
            <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
          </svg>
        </div>
        <div className="flex justify-end flex-1">
          <div className="flex items-stretch">
            <div className="flex flex-col w-full mx-2 items-center">
              <div className="flex-row flex items-center gap-2 tooltip" data-tip="Use slider to select your group size">
                <label className="lg:text-lg md:text-md text-sm">Group Size</label>
                <svg
                  width="14px"
                  height="14px"
                  viewBox="0 0 21 21"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  className="bi bi-x cursor-pointer"
                  onClick={() => handleResetGroupSize()}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g fill="none" fillRule="evenodd" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" transform="matrix(0 1 1 0 2.5 2.5)">
                      <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"></path>
                      <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <input type="range" min={1} max={9} value={groupSize} className="range range-primary lg:range-md range-sm lg:w-80 md:w-60 w-40" step={1} onChange={handleGroupSizeChange} />
              <div className="w-full flex justify-between text-sm px-2">
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
            <label className="input input-bordered input-primary flex flex-row items-center gap-2 my-auto lg:w-40 md:32 w-24">
              <input
                type="text"
                className="grow lg:w-24 w-10"
                placeholder="Min Age"
                value={minAge}
                onChange={(e) => setMinAge(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-x cursor-pointer"
                onClick={handleClearMinAge}
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
            </label>
            <select onChange={(e) => setSelectedCategory(e.target.value)} className="select select-primary ml-2 my-auto text-md lg:w-40 md:32 w-24">
              <option value="">Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="divider divider-primary opacity-30 mb-0"></div>
      <div className="overflow-y-scroll flex-grow">
        <GameList games={filteredGames} />
      </div>
    </div>

  );
}