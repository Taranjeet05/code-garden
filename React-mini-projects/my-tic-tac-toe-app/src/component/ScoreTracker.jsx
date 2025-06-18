import PropTypes from "prop-types";

const ScoreTracker = ({ scores, winner }) => {
  return (
    <>
      <h2 className="ml-10 mt-5 font-bold">SCORE:</h2>
      <div className="flex items-center justify-center gap-12 w-full mt-1">
        <h2>❌ :: {scores.X}</h2>
        <h2>⭕ :: {scores.O}</h2>
        <h2>🟰 :: {scores.tie}</h2>
      </div>
      {winner && (
        <h3 className="text-center mt-4 font-semibold">
          {winner === "Tie" ? "It's a Tie! 🟰" : `Winner: ${winner === "X" ? "❌" : "⭕"} 🎉`}
        </h3>
      )}
    </>
  );
};

// PropTypes
ScoreTracker.propTypes = {
  scores: PropTypes.shape({
    X: PropTypes.number.isRequired,
    O: PropTypes.number.isRequired,
    tie: PropTypes.number.isRequired,
  }).isRequired,
  winner: PropTypes.string,
};

export default ScoreTracker;
