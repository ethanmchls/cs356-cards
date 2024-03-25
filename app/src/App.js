import { GameView } from "./GameView";
// import { Home } from "./Home";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    // / should route to home, /explore should route to GameView
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/game-night" element={<GameView />} />
    //   </Routes>
    // </Router>
    <GameView />
  );
};

export default App;
