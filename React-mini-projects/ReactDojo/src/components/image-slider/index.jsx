import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = ({ url, limit = 5, page = 1 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();
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

  function handlePrevClick() {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  function handleNextClick() {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading.... Please wait....</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occurred: {errorMsg}</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 gap-14">
      <div className="text-5xl mb-6">Image Slider</div>
      <div className="flex items-center">
        <BsArrowLeftCircleFill
          onClick={handlePrevClick}
          className="cursor-pointer text-gray-700 text-4xl mx-2"
        />
        <img
          src={images[currentSlide]?.url}
          alt={images[currentSlide]?.author}
          className="w-96 h-96 object-cover"
        />
        <BsArrowRightCircleFill
          onClick={handleNextClick}
          className="cursor-pointer text-gray-700 text-4xl mx-2"
        />
      </div>
      <div className="flex mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-4 w-4 rounded-full mx-1 cursor-pointer ${
              currentSlide === index ? "bg-yellow-500" : "bg-gray-500"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Prop validation
ImageSlider.propTypes = {
  url: PropTypes.string.isRequired,
  limit: PropTypes.number,
  page: PropTypes.number,
};

ImageSlider.defaultProps = {
  limit: 5,
  page: 1,
};

export default ImageSlider;
