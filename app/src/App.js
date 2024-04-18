import { GameView } from "./GameView";
import { Home } from "./Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      {/* <Route exact path="/" element={<Home />} />
      <Route exact path="/explore" element={<GameView />} /> */}
      <Route path="/" element={<GameView />} />
    </Routes>
  );
};

export default App;
