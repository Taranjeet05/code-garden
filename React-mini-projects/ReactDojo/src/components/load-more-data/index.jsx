import { useState, useEffect } from "react";

const LoadMoreData = () => {
  // usestates
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts(result.products); 
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  // useEffect for fetching products when count changes
  useEffect(() => {
    fetchProducts();
  }, [count]);

  // Button disabled when 100 products are reached
  const disableButton = count >= 5; // 5 loads * 20 products = 100 products

  if (loading) {
    return <div>Loading data! Please wait.</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-4 gap-2">
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
        <button
          disabled={disableButton}
          onClick={() => setCount(count + 1)}
          className={`px-4 py-2 border rounded ${
            disableButton
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          Load More Products
        </button>
        {disableButton && <p className="text-gray-500">You have reached 100 products</p>}
      </div>
    </div>
  );
};

export default LoadMoreData;

// this is the website where we can get dummy products for this project
// dummyjson.com/docs/products