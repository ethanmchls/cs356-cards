import { GameView } from "./GameView";
import { Home } from "./Home";
import { BrowserRouter as Route, Routes } from "react-router-dom";

const App = () => {
  return (
    // <Router>
      <Routes>
        <Route path="/game-night" element={<Home />} />
        <Route path="/game-night/explore" element={<GameView />} />
      </Routes>
    // </Router>
  );
};

export default App;
