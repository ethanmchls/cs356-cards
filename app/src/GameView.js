import React, { useState } from 'react';
import GameList from './GameList';
import gameData from './gameData';
import gameCategories from './categories';

const dice = [
  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm5 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>,
  <path d="M0 3a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3zm5.5 1a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m6.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>,
  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>,
  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>,
  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>,
  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
]

const startDie = 4;

export const GameView = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryPlaceholder, setCategoryPlaceholder] = useState('Any');
  const [minAge, setMinAge] = useState(0);
  const [groupSize, setGroupSize] = useState(0);
  const [rotate, setRotate] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [diceIndex, setDiceIndex] = useState(startDie);
  const [resetDie, setResetDie] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCategoryPlaceholder(e.target.value);
    setSelectedIndex(null);
  }

  const handleAgeChange = (e) => {
    var age = parseInt(e.target.value);
    if (age === 5) {
      age = 0;
    }
    setMinAge(age);
    setSelectedIndex(null);
  }

  const handleGroupSizeChange = (e) => {
    setGroupSize(parseInt(e.target.value));
    setSelectedIndex(null);
  };

  const handleResetAll = () => {
    setSelectedCategory(null);
    setCategoryPlaceholder('Any');
    setMinAge(0);
    setGroupSize(0);
    setSelectedIndex(null);
    setDiceIndex(startDie);
    if (resetDie) {
      setResetDie(false);
      setRotate(!rotate);
    }
  }

  var filteredGames = gameData.filter((game) => {
    return (
      (!selectedCategory || game.category === selectedCategory) &&
      (!minAge || game.ageMin <= minAge) &&
      (groupSize === 0 || (groupSize >= game.playerMin && groupSize <= game.playerMax)) &&
      (!selectedIndex || game.name === selectedIndex)
    );
  });

  const handleRandomizerClicked = () => {
    setDiceIndex(Math.floor(Math.random() * dice.length));
    setRotate(!rotate);
    setSelectedIndex(null);
    filteredGames = gameData.filter((game) => {
      return (
        (!selectedCategory || game.category === selectedCategory) &&
        (!minAge || game.ageMin <= minAge) &&
        (groupSize === 0 || (groupSize >= game.playerMin && groupSize <= game.playerMax))
      );
    });
    let randomIndex = Math.floor(Math.random() * filteredGames.length);
    while (filteredGames[randomIndex].name === selectedIndex && filteredGames.length > 1) {
      randomIndex = Math.floor(Math.random() * filteredGames.length);
    }
    let selectedGame = filteredGames[randomIndex];
    setSelectedIndex(selectedGame.name);
    setResetDie(true);
  }

  const categories = gameCategories.map((category) => category.category);

  return (
    <div className="container mx-auto pt-4 w-screen h-screen flex flex-col">
      <div className="px-2">
        <div className="navbar flex flex-row bg-base-300 rounded-box sticky top-0 z-10 h-28 mx-auto">
          <div className="flex-1 px-2 lg:flex-none font-bold xl:text-6xl lg:text-5xl md:text-3xl text-2xl">
            <a href="#/" className="hover:scale-105">Game Night</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="mx-3 bi bi-dice-5 xl:w-12 lg:w-10 md:w-8 w-4 transform ease-in-out duration-1000 hover:rotate-[360deg]" viewBox="0 0 16 16">
              <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"/>
              <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
            </svg>
          </div>
          <div className="flex justify-end flex-1">
            <div className="flex items-stretch mt-2">
              <div className="flex flex-col w-full mx-4 items-center mb-4">
                <div className="flex-row flex items-center gap-2">
                  <label className="lg:text-lg md:text-md text-sm flex-none">Group Size</label>
                </div>
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="select select-primary my-auto text-md w-24 py-2">{
                    groupSize === 0 ? "Any" : groupSize === 9 ? "8+" : groupSize
                  }</div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <input type="range" min={0} max={9} value={groupSize} className="range range-primary lg:range-md range-sm w-full" step={1} onChange={handleGroupSizeChange} />
                    <div className="w-full flex justify-between text-sm px-2">
                      <span className="mr-1">•</span>
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
                  </ul>
                </div>
              </div>
              <div className="flex flex-col w-full mx-4 items-center mb-4">
                <div className="flex-row flex items-center gap-2">
                  <label className="lg:text-lg md:text-md text-sm flex-none">Min Age</label>
                </div>
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="select select-primary my-auto text-md w-24 py-2">{
                    minAge <= 5 ? "Any" : minAge === 9 ? "8+" : minAge
                  }</div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-72">
                    <input type="range" min={5} max={18} value={minAge} className="range range-primary lg:range-md range-sm w-full" step={1} onChange={handleAgeChange} />
                    <div className="w-full flex justify-between text-sm px-2">
                      <span className="w-4">•</span>
                      <span className="w-4">6</span>
                      <span className="w-4">7</span>
                      <span className="w-4">8</span>
                      <span className="w-3">9</span>
                      <span>10</span>
                      <span>11</span>
                      <span>12</span>
                      <span>13</span>
                      <span>14</span>
                      <span>15</span>
                      <span>16</span>
                      <span>17</span>
                      <span>+</span>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col w-full mx-4 items-center mb-4">
                <div className="flex-row flex items-center gap-2">
                  <label className="lg:text-lg md:text-md text-sm flex-none">Category</label>
                </div>
                <select onChange={(e) => handleCategoryChange(e)} value={categoryPlaceholder} className="select select-primary my-auto text-md w-40">
                  <option key="" value="">Any</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full mx-4 items-center mb-4">
                <div className="flex-row flex items-center gap-2">
                  <label className="lg:text-lg md:text-md text-sm flex-none">Surprise Me</label>
                </div>
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-primary my-auto text-md w-32 py-2 flex-none text-white" onClick={handleRandomizerClicked}>
                    Random
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="white"
                      className={`mx-auto bi bi-dice-5 xl:w-6 lg:w-5 md:w-4 w-3 transition-all duration-700 ${rotate ? "rotate-[180deg]" : "rotate-[0deg]"}`}
                      viewBox="0 0 16 16"
                    >
                      {dice[diceIndex]}
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-8 ml-2 mr-6 tooltip" data-tip="Reset all filters">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 21 21"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  className="bi bi-x cursor-pointer"
                  onClick={() => handleResetAll()}
                >
                  <g id="SVGRepo_bgCarrier-1" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier-1" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier-1">
                    <g fill="none" fillRule="evenodd" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" transform="matrix(0 1 1 0 2.5 2.5)">
                      <path d="m3.98652376 1.07807068c-2.38377179 1.38514556-3.98652376 3.96636605-3.98652376 6.92192932 0 4.418278 3.581722 8 8 8s8-3.581722 8-8-3.581722-8-8-8"></path>
                      <path d="m4 1v4h-4" transform="matrix(1 0 0 -1 0 6)"></path>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-shrink border-t-2 border-primary mt-4 mb-0 opacity-30 mx-2"></div>
      <div className="overflow-y-scroll flex-grow px-2">
        <GameList games={filteredGames} />
      </div>
    </div>

  );
}