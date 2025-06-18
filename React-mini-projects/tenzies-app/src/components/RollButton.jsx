import PropTypes from "prop-types";

const RollButton = ({ hasWon, onClick }) => {
  return (
    <>
      <div>
        <button
        onClick={onClick}
        className="bg-[#5035FF] w-[92px] h-[36px] text-white font-semibold rounded-lg shadow-md hover:bg-[#4028cc] active:scale-95 transition-all duration-200">
        {hasWon ? "Restart" : "Roll"}
        </button>
      </div>
    </>
  )
}

RollButton.propTypes = {
  hasWon: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default RollButton