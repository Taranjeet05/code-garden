import './App.css'
import Header from './components/Header'
import Instructions from './components/Instructions'
import Board from './components/Board'
import RollButton from './components/RollButton'
import { useState,useEffect } from 'react'

function App() {
  
  const [dice, setDice] = useState(generateNewDice());
  const [hasWon, setHasWon] = useState(false);

  // Generate a new dice array
  function generateNewDice() {
    return Array.from({ length: 10 }, () => ({
      id: Math.random(),
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }

  // Roll the dice
  const rollDice = () => {
    if (hasWon) {
      setDice(generateNewDice());
      setHasWon(false);
    } else {
      setDice((prevDice) =>
        prevDice.map((die) =>
          die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
        )
      );
    }
  };

    // Toggle hold status of a die
    const toggleHold = (id) => {
      setDice((prevDice) =>
        prevDice.map((die) =>
          die.id === id ? { ...die, isHeld: !die.isHeld } : die
        )
      );
    };

    useEffect(() => {
      const allHeld = dice.every((die) => die.isHeld);
      const allSameValue = dice.every((die) => die.value === dice[0].value);
  
      if (allHeld && allSameValue) {
        setHasWon(true);
      }
    }, [dice]);

  return (
    <>
    <div className='text-Black bg-[#F5F5F5]'>
      <Header />
      <Instructions hasWon={hasWon} />
      <Board dice={dice} toggleHold={toggleHold} />
      <RollButton hasWon={hasWon} onClick={rollDice} />
    </div>
    </>
  )
}

export default App
