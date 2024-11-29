import { useState } from "react";

const Board = () => {
  const [dice, setDice] = useState([
    { id: 0, value: 1, isFreeze: false },
    { id: 1, value: 2, isFreeze: false },
    { id: 2, value: 3, isFreeze: false },
    { id: 3, value: 4, isFreeze: false },
    { id: 4, value: 5, isFreeze: false },
    { id: 5, value: 6, isFreeze: false },
    { id: 6, value: 7, isFreeze: false },
    { id: 7, value: 8, isFreeze: false },
    { id: 8, value: 9, isFreeze: false },
    { id: 9, value: 10, isFreeze: false },
  ]);

  const diceButtons = dice.map((die) => (
    <button
      key={die.id}
      className="w-16 h-16 bg-blue-500 text-white flex items-center justify-center rounded-full m-2"
    >
      {die.value}
    </button>
  ));

  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        {diceButtons}
      </div>
    </>
  );
};

export default Board;
