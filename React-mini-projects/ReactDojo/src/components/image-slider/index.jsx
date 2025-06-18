import PropTypes from "prop-types"; // Import PropTypes for validating component props.
import { useState, useEffect } from "react"; 
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"; 

// Functional component for the image slider.
const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  // State to store fetched images.
  const [images, setImages] = useState([]);
  // State to track the currently displayed slide.
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch images from the provided API endpoint.
  async function fetchImages(getUrl) {
    try {
      setLoading(true); 
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`); // Fetch images with pagination.
      const data = await response.json(); 

      // Transform data into a simpler format for rendering.
      const transformedData = data.map((item) => ({
        id: item.id, 
        url: item.download_url, 
        author: item.author, 
      }));

      setImages(transformedData); 
      setLoading(false); 
    } catch (error) {
      setErrorMsg(error.message || "Failed to fetch images."); 
      setLoading(false); 
    }
  }

  // Function to handle click on the previous button.
  function handlePrevClick() {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1)); 
  }

  // Function to handle click on the next button.
  function handleNextClick() {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1)); 
  }

  // Effect hook to fetch images when the `url` prop changes.
  useEffect(() => {
    if (url !== "") fetchImages(url); 
  }, [url]); 

  // Render a loading message while data is being fetched.
  if (loading) {
    return <div>Loading.... Please wait....</div>;
  }

  // Render an error message if fetching fails.
  if (errorMsg !== null) {
    return <div>Error occurred: {errorMsg}</div>;
  }

  // Main render for the image slider.
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-14">
      {/* Slider title */}
      <div className="text-5xl mb-6">Image Slider</div>

      {/* Slider navigation and display */}
      <div className="flex items-center">
        {/* Previous button */}
        <BsArrowLeftCircleFill
          onClick={handlePrevClick} // Navigate to the previous slide.
          className="cursor-pointer text-gray-700 text-4xl mx-2"
        />

        {/* Display the current image */}
        <img
          src={images[currentSlide]?.url} 
          alt={images[currentSlide]?.author} 
          className="w-96 h-96 object-cover"
        />

        {/* Next button */}
        <BsArrowRightCircleFill
          onClick={handleNextClick} // Navigate to the next slide.
          className="cursor-pointer text-gray-700 text-4xl mx-2"
        />
      </div>

      {/* Dots to indicate the current slide and allow navigation */}
      <div className="flex mt-4">
        {images.map((_, index) => (
          <div
            key={index} // Key for each dot.
            className={`h-4 w-4 rounded-full mx-1 cursor-pointer ${
              currentSlide === index ? "bg-yellow-500" : "bg-gray-500" 
            }`}
            onClick={() => setCurrentSlide(index)} // Navigate to the selected slide.
          />
        ))}
      </div>
    </div>
  );
};

// Prop validation to enforce type and presence of props.
ImageSlider.propTypes = {
  url: PropTypes.string.isRequired, // `url` is required and should be a string.
  limit: PropTypes.number, // `limit` is optional and should be a number.
  page: PropTypes.number, // `page` is optional and should be a number.
};

// Default values for optional props.
ImageSlider.defaultProps = {
  limit: 5, // Default limit for number of images per page.
  page: 1, // Default page number for the API request.
};

export default ImageSlider; 
