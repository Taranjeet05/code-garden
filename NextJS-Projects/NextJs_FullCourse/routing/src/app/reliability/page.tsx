import React from "react";
import Link from "next/link";

const ReliabilityPage = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-900 text-center">🛡️ Next.js Reliability</h1>
      <p className="mt-4 text-lg text-gray-700 text-center md:w-3/4 mx-auto">
        Next.js is **highly reliable** due to **automatic error handling, middleware, and server-side rendering**.
      </p>

      {/* Key Features Section */}
      <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center">
        <div className="p-6 bg-white shadow-md rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-blue-700">💡 Middleware Support</h2>
          <p className="text-gray-600 mt-2">Middleware allows real-time request processing before rendering pages.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-blue-700">🔥 Server-Side & Static Pre-rendering</h2>
          <p className="text-gray-600 mt-2">Ensures reliability by delivering optimized and pre-rendered content.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-blue-700">📊 Built-in API Routes</h2>
          <p className="text-gray-600 mt-2">Secure backend API routes make Next.js a **full-stack framework**.</p>
        </div>
      </div>

      {/* Nested Route Link */}
      <div className="mt-10 text-center">
        <Link href="/reliability/more-info" className="text-blue-600 font-medium hover:underline">
          Learn More About Reliability →
        </Link>
      </div>
    </div>
  );
};

export default ReliabilityPage;
