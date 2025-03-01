"use client";
import { Button } from "@/components/ui/button";
type ErrorPageProps = {
  error: Error;
};

const ErrorPage = ({ error }: ErrorPageProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="max-w-lg w-full bg-red-600 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="text-lg mb-4">
          We encountered an error while processing your request.
        </p>
        <p className="text-md italic">Error Message:</p>
        <p className="bg-white text-gray-900 p-2 rounded-md mt-2">{error.message}</p>
        <div className="mt-4">
          <Button
            onClick={() => window.location.reload()}
            className="bg-white text-red-600 px-4 py-2 rounded-lg hover:bg-gray-200"
          >
            Try Again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
