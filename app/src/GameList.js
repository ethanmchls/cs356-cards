import React from 'react';

const GameList = ({ games }) => {
  return (
    <div className="flex flex-wrap space-x-4">
      {games.map((game) => (
        <div
          className="card max-w-[250px] bg-base-100 shadow-md rounded-box hover:shadow-lg hover:scale-105"
          onClick={() =>
            document.getElementById(`${game.name}-modal`).showModal()
          }
        >
          <figure><img src={`${game.image}`} alt="Shoes" /></figure>
          <div className="card-body">
            <div className="card-title text-lg">{game.name}</div>
            <div className="card-actions justify-end">
              <div className="badge badge-outline border-secondary text-secondary">{game.ageMin}+</div> 
              <div className="badge badge-outline border-secondary text-secondary">
                {game.playerMin}-{game.playerMax}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person ml-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
              </div>
              <div className="badge badge-secondary text-base-100">{game.rating}</div>
            </div>
            <dialog id={`${game.name}-modal`} className="modal">
              <div className="modal-box bg-base-100 rounded-box">
                <h1 className="text-2xl font-bold">{game.name}</h1>
                <p className="py-4">
                  <b>Game description:</b><br></br> {game.description}
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn btn-neutral-content hover:btn-secondary rounded-box border-2 border-secondary">Close</button>
                  </form>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button></button>
              </form>
            </dialog>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameList;
