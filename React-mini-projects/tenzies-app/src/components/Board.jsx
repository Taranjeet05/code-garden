import Dice from "./Dice";
import PropTypes from "prop-types";

const Board = ({ dice, toggleHold }) => (
  <div className="grid grid-cols-5 gap-4 mb-6">
    {dice.map((die) => (
      <Dice
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        onHold={() => toggleHold(die.id)}
      />
    ))}
  </div>
);

Board.propTypes = {
  dice: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      value: PropTypes.number.isRequired,
      isHeld: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleHold: PropTypes.func.isRequired,
};

export default Board;
