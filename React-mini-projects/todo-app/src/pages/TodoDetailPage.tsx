import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TodoDetailPage = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center justify-center px-6 py-10">
      {/* Back Button */}
      <div className="w-full max-w-3xl">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-600 hover:text-black transition mb-6"
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="text-lg font-semibold">Back to Home</span>
        </Link>
      </div>

      {/* Content Container */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full text-center">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900">
          Create a React App with Vite and Tailwind CSS
        </h2>
        <p className="mt-6 text-gray-700 text-lg sm:text-xl md:text-2xl">
          Here comes the detailed description of the To-Do. You need to create a
          React app using Vite and configure Tailwind CSS for styling.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          <Button className="bg-blue-600 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out">
            Edit
          </Button>
          <Button
            variant="destructive"
            className="bg-red-500 text-white text-lg font-semibold px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300 ease-in-out"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoDetailPage;
