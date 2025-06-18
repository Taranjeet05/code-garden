import PropTypes from "prop-types";

const Dice = ({ value, isHeld, onHold }) => (
  <div
    onClick={onHold}
    className={`w-16 h-16 flex items-center justify-center text-2xl font-bold rounded-md shadow-md cursor-pointer
      ${isHeld ? "bg-green-400 text-white" : "bg-white text-black"}`}
  >
    {value}
  </div>
);

Dice.propTypes = {
  value: PropTypes.number.isRequired,
  isHeld: PropTypes.bool.isRequired,
  onHold: PropTypes.func.isRequired,
};

export default Dice;
