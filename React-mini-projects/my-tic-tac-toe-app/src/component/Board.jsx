import { useState } from "react"


const Board = () => {

  const [board, setBoard] = useState(Array(9).fill(null));

  return (
    <> 
      {/* Game Board */}
      <div className="flex items-center justify-center">

      <div className="flex items-center justify-center flex-wrap w-64">
          {board.map((value, index) => (
            <button
              key={index}
              className="h-20 w-20 bg-white border-2 border-green-500 text-2xl font-bold flex items-center justify-center hover:bg-green-200 transition duration-200"              onClick={() => console.log(`Cell ${index} clicked`)}
            >
              {value}
            </button>
          ))}
        </div>

      </div>
      

      <div className="flex items-center justify-center m-5">
        <button
        className="bg-red-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-200 "
        >Restart</button>
      </div>
     </>
  )
}

export default Board


