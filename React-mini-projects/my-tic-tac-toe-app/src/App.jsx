import "./App.css";
import useTicTacToe from "./hooks/useTicTacToe";
import Board from "./component/Board";
import Header from "./component/Header";
import ScoreTracker from "./component/ScoreTracker";
import TurnIndicater from "./component/TurnIndicater";

function App() {
  const {
    board,
    currentPlayer,
    winner,
    scores,
    handleCellClick,
    resetGame,
  } = useTicTacToe();

  return (
    <>
      <Header />
      <TurnIndicater currentPlayer={currentPlayer} />
      <Board
        board={board}
        handleCellClick={handleCellClick}
        resetGame={resetGame}
      />
      <ScoreTracker scores={scores} winner={winner} />
    </>
  );
}

export default App;
