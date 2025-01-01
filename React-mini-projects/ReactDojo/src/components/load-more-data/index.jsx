import { useState, useEffect } from "react";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [hasMore, setHasMore] = useState(true); 
  const [error, setError] = useState(null);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${count * 10}`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts(result.products); 
        setHasMore(result.products.length === 10); 
      } else {
        setHasMore(false); 
      }

      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError("Failed to load products, please try again later.");
      console.error(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading && count === 0) {
    return <div>Loading... Please wait...</div>;
  }

  return (
    <div className="bg-gradient-to-r from-green-400 to-teal-500 flex flex-col items-center justify-center p-6">
      <div className="mb-8">
        <h1 className="text-6xl font-extrabold text-white text-center shadow-md">
          FetchMore
        </h1>
      </div>

      {/* Error Message */}
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      {/* Product Container - Flex Layout */}
      <div className="flex flex-wrap gap-6 justify-center w-full">
        {products.length > 0 ? (
          products.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center w-full sm:w-1/2 md:w-1/4 lg:w-1/5 p-4 border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-56 object-cover rounded-lg"
              />
              <p className="mt-4 text-center font-semibold text-gray-800 text-lg">
                {item.title}
              </p>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500">No products available</div>
        )}
      </div>

      {/* Load More Button */}
      {hasMore ? (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setCount(count + 1)}
            disabled={loading}
            className={`bg-blue-600 py-4 px-8 rounded-xl text-white font-medium text-lg shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Loading..." : "Load More Data"}
          </button>
        </div>
      ) : (
        <div className="text-center mt-4 text-gray-500">No more data to load</div>
      )}
    </div>
  );
};

export default LoadMoreData;
