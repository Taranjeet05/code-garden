import { useState } from "react"

const useTicTacToe = () => {

    // 1. States
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [winner, setWinner] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);
    const [scores, setScores] = useState({ X: 0, O: 0, tie: 0 });


    // 2. This is to check winner by creating winner patterns.
    const checkWinner = (board) => {
        const winPatterns = [
            [0, 1, 2], // top row
            [3, 4, 5], // middle row
            [6, 7, 8], // last row
            [0, 3, 6], // left column
            [1, 4, 7], // middle column
            [2, 5, 8], // right column
            [0, 4, 8], // left-to-right diagonal
            [2, 4, 6], // right-to-lext diagonal
        ]

        return winPatterns.some((pattern) =>
        pattern.every((index) => board[index] === currentPlayer));
    }


    // 3. we are going to handel cell Click.

    const handelCellClick = (index) => {
        if(board[index] || isGameOver) return;

        const updateBoard = [...board];
        updateBoard === currentPlayer; 
        setBoard(updateBoard);

        if(checkWinner(updateBoard)) {
            setWinner(currentPlayer);

            setScores((prevScores) => ({
                ...prevScores,
                [currentPlayer] : prevScores[currentPlayer] + 1,
            }));
            setIsGameOver(true);
        } else if (updateBoard.every ((cell) => cell)) {
            setWinner('Tie'); 

            setScores((prevScores)=> ({
                ...prevScores, 
                tie : prevScores.tie + 1,
            }));
            setIsGameOver(false);
        } else {
            setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x');
        }
    }

    // 4. Reset the Game when we click on (Reset BUtton).

    const resetGame = () => {
        setBoard(Array(9).fill(null)); 
        setCurrentPlayer("X"); 
        setWinner(null); 
        setIsGameOver(false); 
      };

      // returning all the states and functions so they can be used in components.
      return { board, currentPlayer, winner, isGameOver, scores, handleCellClick, resetGame };
    };



export default useTicTacToe 