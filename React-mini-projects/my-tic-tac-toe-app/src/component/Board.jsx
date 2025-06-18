import PropTypes from "prop-types";

const Board = ({ board, handleCellClick, resetGame }) => {
  return (
    <div className="flex items-center justify-center flex-col ">
      <div className="flex items-center justify-center flex-wrap w-64">
        {board.map((value, index) => (
          <button
            key={index}
            className="h-20 w-20 bg-white border-2 border-green-500 text-2xl font-bold flex items-center justify-center hover:bg-green-200 transition duration-200"
            onClick={() => handleCellClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center m-5">
        <button
          onClick={resetGame}
          className="bg-red-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

// PropTypes
Board.propTypes = {
  board: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCellClick: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
};

export default Board;
