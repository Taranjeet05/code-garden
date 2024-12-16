import { useState, useEffect } from "react";

const LoadMoreData = () => {
  // State variables for managing the component state
  const [loading, setLoading] = useState(false); // Boolean state for indicating if data is being loaded
  const [products, setProducts] = useState([]); // Array state for holding fetched product data
  const [count, setCount] = useState(0); // Counter state to determine which batch of products to fetch

  // Function to fetch products from the API
  async function fetchProducts() {
    try {
      setLoading(true); // Set loading to true before making the request
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }` // API endpoint with query parameters for pagination
      );

      const result = await response.json(); // Parse the JSON response

      if (result && result.products && result.products.length) {
        setProducts(result.products); // Update the products state with new data
        setLoading(false); // Set loading to false once data is fetched
      }
    } catch (e) {
      console.error(e); // Log any errors
      setLoading(false); // Set loading to false in case of an error
    }
  }

  // useEffect hook to trigger product fetching whenever the count state changes
  useEffect(() => {
    fetchProducts();
  }, [count]); // Dependency array to watch for changes in count

  // Determine if the Load More button should be disabled based on the total products fetched
  const disableButton = count >= 5; // 5 * 20 products = 100 products

  // Render loading message while data is being fetched
  if (loading) {
    return <div>Loading data! Please wait.</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-4 gap-2">
        {/* Map over the products array and display each product */}
        {products.map((item) => (
          <div
            key={item.id}
            className="p-5 border border-gray-300 flex flex-col gap-2"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-[200px] h-[200px] object-cover"
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-2">
        {/* Button to load more products */}
        <button
          disabled={disableButton} // Disable button when 100 products are reached
          onClick={() => setCount(count + 1)} // Increment the count when button is clicked
          className={`px-4 py-2 border rounded ${
            disableButton
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Load More Products
        </button>
        {/* Display message when button is disabled */}
        {disableButton && <p className="text-gray-500">You have reached 100 products</p>}
      </div>
    </div>
  );
};

export default LoadMoreData;