import React from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

const SnippetNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <AlertCircle className="w-16 h-16 text-red-500 mb-4" />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Snippet Not Found
      </h1>
      <p className="text-gray-600 mb-6">
        Sorry, the snippet you are looking for does not exist.
      </p>
      <Link href={"/"}>
        <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
          Go Back Home
        </Button>
      </Link>
    </div>
  );
};

export default SnippetNotFound;