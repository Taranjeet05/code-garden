import React from "react";
import Link from "next/link";

const ReliabilityMoreInfoPage = () => {
  return (
    <div className="min-h-screen px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-blue-900 text-center">🔧 Deep Dive: Next.js Reliability</h1>
      <p className="mt-4 text-lg text-gray-700 text-center md:w-3/4 mx-auto">
        Next.js provides reliability through **API handling, error boundaries, and middleware security**.
      </p>

      {/* Detailed Sections */}
      <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center">
        <div className="p-6 bg-gray-50 shadow-md rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-blue-700">🛠️ API Routes & Middleware</h2>
          <p className="text-gray-600 mt-2">
            API routes allow **backend logic within Next.js**, ensuring reliability.
          </p>
        </div>
        <div className="p-6 bg-gray-50 shadow-md rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-blue-700">⚠️ Built-in Error Handling</h2>
          <p className="text-gray-600 mt-2">
            Next.js provides **error boundaries** and automatic handling to prevent failures.
          </p>
        </div>
        <div className="p-6 bg-gray-50 shadow-md rounded-lg w-full md:w-1/3">
          <h2 className="text-xl font-semibold text-blue-700">🔍 Automatic Code Splitting</h2>
          <p className="text-gray-600 mt-2">
            Loads only necessary JavaScript files, **ensuring stable and efficient apps**.
          </p>
        </div>
      </div>

      {/* Back to Reliability Page */}
      <div className="mt-10 text-center">
        <Link href="/reliability" className="text-blue-600 font-medium hover:underline">
          ← Back to Reliability Page
        </Link>
      </div>
    </div>
  );
};

export default ReliabilityMoreInfoPage;
