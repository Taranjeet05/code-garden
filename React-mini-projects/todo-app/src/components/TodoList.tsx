import { Button } from "./ui/button";
import { CheckCircle, XCircle } from "lucide-react";
import { Link } from "react-router-dom";

const TodoList = () => {
  return (
    <div className="max-w-lg sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto p-6 bg-white rounded-lg mt-10">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        ✅ ToDo List
      </h1>

      {/* Task Card */}
      <Link to="/todo-detail">
        <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm mb-3">
          {/* Task Title */}
          <div>
            <h2 className="text-lg font-medium text-gray-900">
              Create an app in React
            </h2>
          </div>
          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button className="bg-green-500 text-white hover:bg-green-600 px-4 py-2 rounded-md shadow cursor-pointer">
              <CheckCircle className="w-8 h-8" />
            </Button>
            <Button className="bg-red-500 text-white hover:bg-red-600 px-4 py-2 rounded-md shadow cursor-pointer">
              <XCircle className="w-8 h-8" />
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TodoList;
