import { useState } from "react";

const useTicTacToe = () => {
  // States
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [scores, setScores] = useState({ X: 0, O: 0, tie: 0 });

  // Check for a winner
  const checkWinner = (board) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    return winPatterns.some((pattern) =>
      pattern.every((index) => board[index] === currentPlayer)
    );
  };

  // Handle cell click
  const handleCellClick = (index) => {
    if (board[index] || isGameOver) return;

    const updatedBoard = [...board];
    updatedBoard[index] = currentPlayer;
    setBoard(updatedBoard);

    if (checkWinner(updatedBoard)) {
      setWinner(currentPlayer);
      setScores((prevScores) => ({
        ...prevScores,
        [currentPlayer]: prevScores[currentPlayer] + 1,
      }));
      setIsGameOver(true);
    } else if (updatedBoard.every((cell) => cell)) {
      setWinner("Tie");
      setScores((prevScores) => ({
        ...prevScores,
        tie: prevScores.tie + 1,
      }));
      setIsGameOver(true);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer("X");
    setWinner(null);
    setIsGameOver(false);
  };

  return { board, currentPlayer, winner, isGameOver, scores, handleCellClick, resetGame };
};

export default useTicTacToe;
