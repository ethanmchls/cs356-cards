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

const startDie = Math.floor(Math.random() * dice.length);

export const GameView = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryPlaceholder, setCategoryPlaceholder] = useState('Any');
  // const [groupSizePlaceholder, setGroupSizePlaceholder] = useState('Group Size');
  // const [agePlaceholder, setAgePlaceholder] = useState('Min Age');
  const [minAge, setMinAge] = useState(0);
  const [groupSize, setGroupSize] = useState(0);
  const [rotate, setRotate] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [diceIndex, setDiceIndex] = useState(startDie);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setCategoryPlaceholder(e.target.value);
    setSelectedIndex(null);
    // filteredGames = gameData.filter((game) => {
    //   return (
    //     (!selectedCategory || game.category === selectedCategory) &&
    //     (!minAge || game.ageMin <= minAge) &&
    //     (groupSize === 0 || (groupSize >= game.playerMin && groupSize <= game.playerMax)) &&
    //     (!selectedIndex || game.name === selectedIndex)
    //   );
    // });
  }

  const handleAgeChange = (e) => {
    var age = parseInt(e.target.value);
    if (age === 5) {
      age = 0;
    }
    setMinAge(age);
    // setAgePlaceholder(e.target.value);
    setSelectedIndex(null);
    // filteredGames = gameData.filter((game) => {
    //   return (
    //     (!selectedCategory || game.category === selectedCategory) &&
    //     (!minAge || game.ageMin <= minAge) &&
    //     (groupSize === 0 || (groupSize >= game.playerMin && groupSize <= game.playerMax))
    //   );
    // });
  }

  // const handleClearMinAge = () => {
  //   setMinAge(0);
  // };

  // const handleClearCategory = () => {
  //   setSelectedCategory(null);
  //   setCategoryPlaceholder('Any');
  // }

  // const handleClearRandomizer = () => {
  //   setSelectedIndex(null);
  // }

  const handleGroupSizeChange = (e) => {
    setGroupSize(parseInt(e.target.value));
    // setGroupSizePlaceholder(e.target.value);
    setSelectedIndex(null);
    // filteredGames = gameData.filter((game) => {
    //   return (
    //     (!selectedCategory || game.category === selectedCategory) &&
    //     (!minAge || game.ageMin <= minAge) &&
    //     (groupSize === 0 || (groupSize >= game.playerMin && groupSize <= game.playerMax))
    //   );
    // });
  };

  // const handleResetGroupSize = () => {
  //   setGroupSize(0);
  // }

  const handleResetAll = () => {
    setSelectedCategory(null);
    setCategoryPlaceholder('Any');
    // setGroupSizePlaceholder('Group Size');
    // setAgePlaceholder('Min Age');
    setMinAge(0);
    setGroupSize(0);
    setSelectedIndex(null);
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
    // console.log(selectedGame);
  }

  const categories = gameCategories.map((category) => category.category);

  return (
    <div className="container mx-auto pt-4 w-screen h-screen flex flex-col">
      <div className="px-2">
        <div className="navbar flex flex-row bg-base-300 rounded-box sticky top-0 z-10 min-h-28 mx-auto">
          <div className="flex-1 px-2 lg:flex-none font-bold xl:text-6xl lg:text-5xl md:text-3xl text-2xl">
            <a href="#/" className="hover:scale-105">Game Night</a>
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="mx-3 bi bi-dice-5 xl:w-12 lg:w-10 md:w-8 w-4 transform ease-in-out duration-1000 hover:rotate-[360deg]" viewBox="0 0 16 16">
              <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"/>
              <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
            </svg>
          </div>
          <div className="flex justify-end flex-1">
            <div className="flex items-stretch mt-2">
              {/* <div className="flex flex-col w-full mx-2 items-center mb-4">
                <div className="flex-row flex items-center gap-2">
                  <label className="lg:text-lg md:text-md text-sm tooltip tooltip-bottom" data-tip="Use slider to select your group size">Group Size</label>
                  <div className="tooltip tooltip-bottom" data-tip="Reset group size">
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
                </div>
                <input type="range" min={1} max={9} value={groupSize} className="range range-primary lg:range-md range-sm xl:w-80 lg:w-60 sm:w-60 xs:w-40 w-48" step={1} onChange={handleGroupSizeChange} />
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
                <div className="tooltip" data-tip="Reset age">
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
                </div>
              </label> */}
              {/* <select onChange={(e) => handleGroupSizeChange(e)} value={groupSizePlaceholder} className="select select-primary ml-2 my-auto text-md lg:w-40 md:32 w-24">
                <option key="0" value={0}>Group Size</option>
                <option key="1" value={1}>1</option>
                <option key="2" value={2}>2</option>
                <option key="3" value={3}>3</option>
                <option key="4" value={4}>4</option>
                <option key="5" value={5}>5</option>
                <option key="6" value={6}>6</option>
                <option key="7" value={7}>7</option>
                <option key="8" value={8}>8+</option>
              </select>
              <select onChange={(e) => handleAgeChange(e)} value={agePlaceholder} className="select select-primary ml-2 my-auto text-md lg:w-40 md:32 w-24">
                <option key="" value={0}>Min Age</option>
                <option key="6" value={6}>6</option>
                <option key="7" value={7}>7</option>
                <option key="8" value={8}>8</option>
                <option key="9" value={9}>9</option>
                <option key="10" value={10}>10</option>
                <option key="11" value={11}>11</option>
                <option key="12" value={12}>12</option>
                <option key="13" value={13}>13</option>
                <option key="14" value={14}>14</option>
                <option key="15" value={15}>15</option>
                <option key="16" value={16}>16</option>
                <option key="17" value={17}>17</option>
                <option key="18" value={18}>18+</option>
              </select> */}
              <div className="flex flex-col w-full mx-4 items-center mb-4">
                <div className="flex-row flex items-center gap-2">
                  <label className="lg:text-lg md:text-md text-sm flex-none">Group Size</label>
                  {/* <div className="tooltip tooltip-bottom" data-tip="Reset group size">
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
                  </div> */}
                </div>
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="select select-primary my-auto text-md w-24 py-2">{
                    groupSize === 0 ? "Any" : groupSize === 9 ? "8+" : groupSize
                  }</div>
                  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <input type="range" min={0} max={9} value={groupSize} className="range range-primary lg:range-md range-sm w-full" step={1} onChange={handleGroupSizeChange} />
                    <div className="w-full flex justify-between text-sm px-2">
                      <span>•</span>
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
                  {/* <div className="tooltip tooltip-bottom" data-tip="Reset minimum age">
                    <svg
                      width="14px"
                      height="14px"
                      viewBox="0 0 21 21"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      className="bi bi-x cursor-pointer"
                      onClick={() => handleClearMinAge()}
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
                  </div> */}
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
                  {/* <div className="tooltip tooltip-bottom" data-tip="Reset category">
                    <svg
                      width="14px"
                      height="14px"
                      viewBox="0 0 21 21"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      className="bi bi-x cursor-pointer"
                      onClick={() => handleClearCategory()}
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
                  </div> */}
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
              {/* <div className="my-auto flex-col">
                <div className="text-center text-sm mb-2 mt-0 mx-2">Random</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  className={`mx-auto bi bi-dice-5 xl:w-6 lg:w-5 md:w-4 w-3 transition-all duration-700 hover:scale-110 ${rotate ? "rotate-[180deg]" : "rotate-[0deg]"}`}
                  viewBox="0 0 16 16"
                  onClick={handleRandomizerClicked}
                >
                  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"/>
                  <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                </svg>
              </div> */}
              <div className="flex flex-col w-full mx-4 items-center mb-4">
                <div className="flex-row flex items-center gap-2">
                  <label className="lg:text-lg md:text-md text-sm flex-none">Surprise Me</label>
                  {/* <div className="tooltip tooltip-bottom" data-tip="Reset random selection">
                    <svg
                      width="14px"
                      height="14px"
                      viewBox="0 0 21 21"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      className="bi bi-x cursor-pointer"
                      onClick={() => handleClearRandomizer()}
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
                  </div> */}
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
                      {/* <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"/>
                      <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/> */}
                      {/* <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm2.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M8 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/> */}
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