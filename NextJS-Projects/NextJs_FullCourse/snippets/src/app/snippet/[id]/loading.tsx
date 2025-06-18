"use client";

import { Loader2 } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
        </div>
        <h2 className="text-2xl font-semibold tracking-tight text-gray-800">
          Loading...
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          Please wait while we prepare everything for you.
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
