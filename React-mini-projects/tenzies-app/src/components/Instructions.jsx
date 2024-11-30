import PropTypes from "prop-types";

const Instructions = ({hasWon}) => {
  return (
    <>
    <div>
    <p className="text-[#4A4E74]">
    {hasWon
      ? "🎉 Congratulations! You won the game! Click Restart to play again."
      : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}
      </p>

    </div>
    </>
  )
}

Instructions.propTypes = {
  hasWon: PropTypes.bool.isRequired,
};

export default Instructions