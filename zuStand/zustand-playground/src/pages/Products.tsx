import { useEffect } from "react";
import { useProductStore } from "../store/productStore";
import { Hatch } from "ldrs/react";

const Products = () => {
  const { products, loading, error, fetchProducts } = useProductStore();

  // Fetch products when the component mounts
  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
  }, [fetchProducts, products.length]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-blue-100">
        <Hatch size="48" stroke="4" speed="3.5" color="#2563eb" />
        <span className="mt-4 text-blue-700 font-medium animate-pulse">
          Loading users...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-red-50">
        <div className="bg-white border border-red-200 rounded-lg shadow-lg p-8 flex flex-col items-center">
          <h1 className="text-red-600 text-xl font-semibold mb-2">Error</h1>
          <p className="text-red-500 mb-4">{error}</p>
          <button
            onClick={fetchProducts}
            className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-2 rounded shadow"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-amber-100 to-red-100 py-10">
      <h1 className="text-center text-5xl font-extrabold font-mono text-blue-700 drop-shadow-lg mb-8 tracking-tight">
        All Products <span className="animate-bounce">✨</span>
      </h1>
      <div className="mx-auto max-w-6xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products && products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="bg-gradient-to-br from-amber-200 to-amber-100 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-200"
              >
                <div className="w-40 h-40 flex items-center justify-center mb-4 bg-white rounded-xl shadow-inner overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-contain h-36 w-36 transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <h2 className="text-lg font-bold text-blue-800 mb-1 text-center">
                  {product.title}
                </h2>
                <p className="text-gray-700 text-sm mb-2 text-center">
                  {product.description}
                </p>
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs mb-2">
                  {product.category}
                </span>
                <p className="text-xl font-semibold text-green-700 mb-1">
                  ${product.price}
                </p>
                <div className="flex items-center mb-3">
                  <span className="text-yellow-500 text-lg mr-1">★</span>
                  <span className="text-gray-800 font-medium">
                    {product.rating.rate}
                  </span>
                  <span className="text-gray-500 text-xs ml-2">
                    ({product.rating.count} reviews)
                  </span>
                </div>
                <div className="flex gap-3 mt-auto">
                  <button className="bg-blue-500 hover:bg-blue-700 transition text-white font-bold py-2 px-4 rounded-lg shadow-md">
                    Add to Cart
                  </button>
                  <button className="bg-green-500 hover:bg-green-700 transition text-white font-bold py-2 px-4 rounded-lg shadow-md">
                    View Details
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-24 col-span-full">
              <p className="mb-6 text-gray-500 text-lg">
                No products found. Click below to fetch products.
              </p>
              <button
                onClick={fetchProducts}
                className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-xl shadow-lg font-semibold text-lg"
              >
                Fetch Products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Products;
