import { GameView } from "./GameView";

const App = () => {
  return (
    <html data-theme="cupcake" className="bg-base-100 overscroll-y-none">
      <GameView className="overscroll-y-none" />
    </html>
  );
};

export default App;
