import React from "react";
import Link from "next/link";

const PerformancePage = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-green-900 text-center">🚀 Next.js Performance</h1>
      <p className="mt-4 text-lg text-gray-700 text-center md:w-3/4 mx-auto">
        Next.js optimizes performance through **automatic static generation, server-side rendering, and efficient image handling**.
      </p>

      {/* Key Features Section */}
      <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center">
        <div className="p-6 bg-white shadow-md rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-green-700">⚡ Automatic Static Optimization</h2>
          <p className="text-gray-600 mt-2">Next.js automatically decides whether a page should be pre-rendered statically or dynamically.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-green-700">📦 Code Splitting & Lazy Loading</h2>
          <p className="text-gray-600 mt-2">Only the required JavaScript is loaded, improving page speed and efficiency.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-green-700">🖼️ Image Optimization</h2>
          <p className="text-gray-600 mt-2">Next.js provides an `Image` component for automatic resizing and lazy loading.</p>
        </div>
      </div>

      {/* Nested Route Link */}
      <div className="mt-10 text-center">
        <Link href="/performance/more-info" className="text-blue-600 font-medium hover:underline">
          Learn More About Performance →
        </Link>
      </div>
    </div>
  );
};

export default PerformancePage;
