import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto p-6 bg-slate-50 min-h-screen">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
          TrendStore
        </h1>
        <p className="text-slate-500">
          Discover our latest collection of products
        </p>
      </header>
      {/* This part runs on the client via the component below */}
      <ProductList />
    </main>
  );
}
