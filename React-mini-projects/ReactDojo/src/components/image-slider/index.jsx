import PropTypes from "prop-types";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen">
        <div className="text-5xl">Image Slider</div>
      </div>
    </>
  );
};

// Prop validation
ImageSlider.propTypes = {
  url: PropTypes.string.isRequired,
  limit: PropTypes.number, 
  page: PropTypes.number, 
};

// Default props (if not provided)
ImageSlider.defaultProps = {
  limit: 5, 
  page: 1,  
};

export default ImageSlider;
