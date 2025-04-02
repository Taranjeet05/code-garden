import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const NewTaskButton = () => {
  return (
    <div className="flex items-center justify-end p-8">
      <Link to="/tasks/new">
        <Button variant="outline">New Task</Button>
      </Link>
    </div>
  );
};

export default NewTaskButton;
