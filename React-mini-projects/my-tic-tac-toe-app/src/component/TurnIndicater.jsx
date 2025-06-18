import PropTypes from "prop-types";

const TurnIndicater = ({ currentPlayer }) => {
  return (
    <div className="flex items-center justify-center mt-7 mb-10 gap-14">
      <h2>Current Turn: {currentPlayer === "X" ? "❌" : "⭕"}</h2>
    </div>
  );
};

// PropTypes
TurnIndicater.propTypes = {
  currentPlayer: PropTypes.string.isRequired,
};

export default TurnIndicater;
