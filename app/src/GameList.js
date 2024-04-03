import React from "react";

const GameDescription = ({ game }) => {
  return (
    <p
      dangerouslySetInnerHTML={{
        __html: game.description.replace(/\n/g, "<br></br>"),
      }}
    />
  );
};

const GameRating = ({ game }) => {
  const filledStars = Math.round(game.rating);
  return (
    <div className="rating rating-md rating-half">
      {Array.from({ length: 10 }).map((_, index) => (
        <input
          key={index}
          type="radio"
          name={`rating-${game.name}-${game.rating}`}
          className={`bg-secondary mask mask-star-2 ${
            index % 2 === 0 ? "mask-half-1" : "mask-half-2"
          }`}
          checked={index < filledStars && index + 1 >= filledStars}
          readOnly
        />
      ))}
    </div>
  );
};

const GameModal = ({ game }) => {
  return (
    <dialog id={`${game.name}-modal`} className="modal">
      <div className="modal-box bg-base-100 rounded-box !max-w-2xl">
        <div className="flex flex-row text-sm">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold mb-6">{game.name}</h1>
            <table>
              <tbody>
                <tr>
                  <p className="text-lg">
                    <td className="descriptionInfo">
                      <b>Category: </b>
                    </td>
                    <td>
                      <div className="badge badge-outline border-secondary text-secondary">
                        {game.category}
                      </div>
                    </td>
                  </p>
                </tr>
                <tr>
                  <p className="text-lg">
                    <td className="descriptionInfo">
                      <b>Play time: </b>
                    </td>
                    <td>
                      <div className="badge badge-outline border-secondary text-secondary">
                        {game.playTimeMin === game.playTimeMax
                          ? `${game.playTimeMax} mins`
                          : `${game.playTimeMin}-${game.playTimeMax} mins`}{" "}
                      </div>
                    </td>
                  </p>
                </tr>
                <tr>
                  <p className="text-lg">
                    <td className="descriptionInfo">
                      <b>Min Age: </b>
                    </td>
                    <td>
                      <div className="badge badge-outline border-secondary text-secondary">
                        {game.ageMin}+
                      </div>
                    </td>
                  </p>
                </tr>
                <tr>
                  <p className="text-lg">
                    <td className="descriptionInfo">
                      <b>Group size: </b>
                    </td>
                    <td>
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
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        </svg>
                      </div>
                    </td>
                  </p>
                </tr>
                <tr>
                  <p className="text-lg">
                    <td className="descriptionInfo">
                      <b>Rating: </b>
                    </td>
                    <td>
                      <div className="badge badge-outline border-secondary text-secondary">
                        {game.rating} / 10
                      </div>
                    </td>
                  </p>
                </tr>
              </tbody>
            </table>
          </div>
          <figure className="aspect-square w-auto ml-auto">
            <img
              src={`${game.image}`}
              alt=""
              className="hidden sm:block xs:w-0 sm:w-64 border border-secondary rounded-lg"
            />
          </figure>
        </div>
        <p className="py-4">
          <b>Description:</b>
          <br></br>
        </p>
        <GameDescription game={game} />
        <br></br>
        <div className="flex items-center">
          <a
            href={game.purchaseLink}
            target="_blank"
            rel="noreferrer"
            className="underline text-accent flex items-center"
          >
            Purchase game
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-box-arrow-up-right ml-1"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
              />
              <path
                fillRule="evenodd"
                d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
              />
            </svg>
          </a>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-neutral-content hover:btn-secondary rounded-box border-2 border-secondary">
              Close
            </button>
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button></button>
      </form>
    </dialog>
  );
};

const GameCard = ({ game }) => {
  return (
    <div
      key={game.name}
      className="card w-auto h-full bg-base-200 shadow-md rounded-box hover:shadow-lg hover:scale-[102%]"
      onClick={() => document.getElementById(`${game.name}-modal`).showModal()}
    >
      <figure className="aspect-square">
        <img src={`${game.image}`} alt="" />
      </figure>
      <div className="card-body">
        <div className="card-title text-lg text-center mx-auto">
          {game.name}
        </div>
        <div className="card-actions justify-center">
          <div className="badge badge-outline border-secondary text-secondary">
            {game.ageMin}+
          </div>
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
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
            </svg>
          </div>
          <GameRating game={game} />
        </div>
        <GameModal game={game} />
      </div>
    </div>
  );
};

const GameList = ({ games }) => {
  return (
    <div className="w-full flex my-4">
      <div className="grid grid-flow-row text-neutral-600 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-between gap-4">
        {games.map((game) => (
          <GameCard key={game.name} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameList;
