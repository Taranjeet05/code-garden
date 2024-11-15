import { useState } from "react"

const useTicTacToe = () => {

    // 1. State
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [winner, setWinner] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);
    const [scores, setScores] = useState({ X: 0, O: 0, tie: 0 });
    
}

export default useTicTacToe