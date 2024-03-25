export const Home = () => {
  return (
    <div className="container mx-auto pt-4 w-screen h-screen flex flex-col">
      <div className="navbar bg-base-300 rounded-box sticky top-0 z-10 min-h-24 justify-between">
        <div className="flex-1 px-2 lg:flex-none font-bold xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl">
          Game Night
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="mx-3 bi bi-dice-5 xl:w-12 lg:w-10 md:w-8 w-4 hover:animate-spin" viewBox="0 0 16 16">
            <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"/>
            <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1
            3 0"/>
          </svg>
        </div>
        <div className="">
          <a href="/game-night/explore" className="btn btn-outline btn-primary w-32 mx-8">Explore</a>
        </div>
      </div>
      <div className="divider divider-primary opacity-30 mt-[11px]"></div>
      <div className="container mx-auto flex flex-col px-6 space-y-4">
        <h1 className="text-2xl font-bold">
          Welcome to Game Night!
        </h1>
        <p>
          Game Night is a fun way to explore new games and find the perfect games for your next game night.
        </p>
        <p>
          Click the Explore button to get started!
        </p>
      </div>
    </div>
  );
};