// import gameData from './gameData';

export const Home = () => {
  return (
    <div className="container mx-auto pt-4 w-screen h-screen flex flex-col px-2">
      <div className="navbar bg-base-300 rounded-box sticky top-0 z-10 h-28 justify-between">
        <div className="flex-1 px-2 lg:flex-none font-bold xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl">
          Game Night
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="mx-3 bi bi-dice-5 xl:w-12 lg:w-10 md:w-8 w-4 transform ease-in-out duration-1000 hover:rotate-[360deg]" viewBox="0 0 16 16">
            <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"/>
            <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1
            3 0"/>
          </svg>
        </div>
        <div className="">
          <a href="#/explore" className="btn btn-primary text-white w-32 mx-8">Explore</a>
        </div>
      </div>

      <div className="flex-shrink border-t-2 border-primary my-4 opacity-30"></div>

      <div className="flex flex-row">
        <div className="card w-1/2 bg-base-200 mx-auto">
          <div className="card-body">
            <p className="text-2xl mb-8">
              Explore new games and find the perfect games for your next game night!
            </p>
            <p className="text-2xl mb-8">
              Filter games based on your group.
            </p>
            <p className="text-2xl mb-8">
              If you want a suggestion, we can pick one for you.
            </p>
            <p className="text-2xl">
              Click the Explore button to get started!
            </p>
          </div>
        </div>
        {/* <div className="carousel carousel-center w-1/2 p-4 space-x-4 bg-base-200 border-secondary border-2 rounded-box ml-4 h-96">
          {gameData.map((game) => (
            <div className="carousel-item">
              <img src={game.image} className="rounded-box" />
            </div>
          ))}
        </div> */}
      </div>
      {/* <div className="container mx-auto flex flex-col px-6 space-y-4">
        <h1 className="text-2xl font-bold">
          Welcome to Game Night!
        </h1>
        <p>
          Game Night is a fun way to explore new games and find the perfect games for your next game night.
        </p>
        <p>
          You can filter games based on your group size, group age, and desired category. If you're having a hard time deciding on a game, you can also use the "Surprise Me" button to get a random suggestion.
        </p>
        <p>
          Click the Explore button to get started!
        </p>
      </div> */}
    </div>
  );
};