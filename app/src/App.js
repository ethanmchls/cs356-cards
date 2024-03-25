import { GameView } from "./GameView";
import { Home } from "./Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/game-night" element={<Home />} />
      <Route path="/game-night/explore" element={<GameView />} />
    </Routes>
  );
};

export default App;
