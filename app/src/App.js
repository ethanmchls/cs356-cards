import { GameView } from "./GameView";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/game-night" />} />
          <Route path="/game-night" element={<GameView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
