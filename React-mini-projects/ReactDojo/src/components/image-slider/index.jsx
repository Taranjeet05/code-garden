import PropTypes from "prop-types"; // Import PropTypes for validating component props.
import { useState, useEffect } from "react"; // Import hooks for managing state and side effects.
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"; // Import icons for navigation buttons.

// Functional component for the image slider.
const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  // State to store fetched images.
  const [images, setImages] = useState([]);
  // State to track the currently displayed slide.
  const [currentSlide, setCurrentSlide] = useState(0);
  // State to store error messages if fetching fails.
  const [errorMsg, setErrorMsg] = useState(null);
  // State to manage loading status during data fetch.
  const [loading, setLoading] = useState(false);

  // Function to fetch images from the provided API endpoint.
  async function fetchImages(getUrl) {
    try {
      setLoading(true); // Set loading to true while fetching data.
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`); // Fetch images with pagination.
      const data = await response.json(); // Parse the JSON response.

      // Transform data into a simpler format for rendering.
      const transformedData = data.map((item) => ({
        id: item.id, // Unique identifier for the image.
        url: item.download_url, // Image URL.
        author: item.author, // Author of the image.
      }));

      setImages(transformedData); // Update the state with the fetched images.
      setLoading(false); // Set loading to false after data is fetched.
    } catch (error) {
      setErrorMsg(error.message || "Failed to fetch images."); // Handle errors gracefully.
      setLoading(false); // Ensure loading stops even if an error occurs.
    }
  }

  // Function to handle click on the previous button.
  function handlePrevClick() {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1)); // Wrap around to the last slide if at the first.
  }

  // Function to handle click on the next button.
  function handleNextClick() {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1)); // Wrap around to the first slide if at the last.
  }

  // Effect hook to fetch images when the `url` prop changes.
  useEffect(() => {
    if (url !== "") fetchImages(url); // Fetch images only if the URL is not empty.
  }, [url]); // Dependencies: Trigger when `url` changes.

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
          src={images[currentSlide]?.url} // Image URL for the current slide.
          alt={images[currentSlide]?.author} // Author name for accessibility.
          className="w-96 h-96 object-cover" // Styling for the image.
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
              currentSlide === index ? "bg-yellow-500" : "bg-gray-500" // Highlight the current slide's dot.
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

export default ImageSlider; // Export the component for use in other parts of the app.
