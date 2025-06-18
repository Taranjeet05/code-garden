import React from "react";
import Link from "next/link";

const PerformanceMoreInfoPage = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-green-900 text-center">📈 Deep Dive: Next.js Performance</h1>
      <p className="mt-4 text-lg text-gray-700 text-center md:w-3/4 mx-auto">
        Next.js performance is achieved through **hybrid static & dynamic rendering, API optimizations, and caching mechanisms**.
      </p>

      {/* Detailed Sections */}
      <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center">
        <div className="p-6 bg-gray-50 shadow-md rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-green-700">🕒 Incremental Static Regeneration (ISR)</h2>
          <p className="text-gray-600 mt-2">
            Enables pages to be updated **without requiring a full rebuild**.
          </p>
        </div>
        <div className="p-6 bg-gray-50 shadow-md rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-green-700">🔄 Server-Side Rendering (SSR)</h2>
          <p className="text-gray-600 mt-2">
            Improves performance by rendering pages **on demand** at request time.
          </p>
        </div>
        <div className="p-6 bg-gray-50 shadow-md rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-green-700">📌 Prefetching & Automatic Caching</h2>
          <p className="text-gray-600 mt-2">
            Next.js **automatically prefetches pages**, making navigation seamless and fast.
          </p>
        </div>
      </div>

      {/* Back to Performance Page */}
      <div className="mt-10 text-center">
        <Link href="/performance" className="text-blue-600 font-medium hover:underline">
          ← Back to Performance Page
        </Link>
      </div>
    </div>
  );
};

export default PerformanceMoreInfoPage;
