"use client";

import ProductCard from "@/components/ProductCard";
import { useProducts } from "@/Hook/useProducts";

export default function ProductList() {
  const { loading, error, products } = useProducts();

  if (loading)
    return (
      <div className="min-h-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (error)
    return <div className="p-10 text-red-500 text-center">{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
