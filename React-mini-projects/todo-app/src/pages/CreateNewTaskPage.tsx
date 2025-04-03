import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

const CreateNewTaskPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-2xl w-full p-8 bg-white rounded-xl shadow-lg border border-gray-200">
        {/* Back Arrow */}
        <Link
          to="/"
          className="absolute top-4 left-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          <ArrowLeftIcon className="w-6 h-6 text-gray-800" />
        </Link>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-gray-800">
          ✍️ Create a New Task
        </h2>

        <form className="flex flex-col gap-6">
          {/* Task Title */}
          <div className="flex flex-col">
            <Label
              htmlFor="task-title"
              className="text-lg font-semibold text-gray-700"
            >
              Task Title
            </Label>
            <Input
              type="text"
              placeholder="Enter your task title..."
              className="cursor-pointer p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 transition"
              id="task-title"
              aria-label="Task Title"
            />
          </div>

          {/* Task Description */}
          <div className="flex flex-col">
            <Label
              htmlFor="task-description"
              className="text-lg font-semibold text-gray-700"
            >
              Task Description
            </Label>
            <Textarea
              placeholder="Enter task details..."
              className="cursor-pointer p-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 transition"
              id="task-description"
              aria-label="Task Description"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="mt-6 w-full bg-black text-white text-lg font-semibol tracking-widest p-6 rounded-lg hover:bg-black/80 transition duration-300 ease-in-out cursor-pointer"
          >
            ✅ Create Task
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewTaskPage;
