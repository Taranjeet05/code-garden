import PropTypes from "prop-types";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ noOfStars = 5, starSize = 60 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseMove(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="flex flex-col gap-28 justify-center items-center h-screen bg-teal-50">
      <h1 className="font-bold text-5xl">Star Rating</h1>
      <div className="flex"> 
      {[...Array(noOfStars)].map((_, index) => {
        const currentIndex = index + 1; // Adjust index to start from 1
        return (
          <FaStar
            key={currentIndex}
            onClick={() => handleClick(currentIndex)}
            onMouseMove={() => handleMouseMove(currentIndex)}
            onMouseLeave={handleMouseLeave}
            size={starSize}
            className={`cursor-pointer transition-colors duration-300 ${
              currentIndex <= (hover || rating)
                ? "text-yellow-500"
                : "text-gray-400"
            }`}
          />
        );
      })}
      </div>
      
    </div>
  );
};

// Prop validation
StarRating.propTypes = {
  noOfStars: PropTypes.number,
  starSize: PropTypes.number,
};

// Default props
StarRating.defaultProps = {
  noOfStars: 5,
  starSize: 60,
};

export default StarRating;
