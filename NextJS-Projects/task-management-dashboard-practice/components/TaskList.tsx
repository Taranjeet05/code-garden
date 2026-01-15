import { Task } from "@/types";
import { Button } from "@/components/ui/button";

export default function TaskList({
  tasks,
  onToggleStatus,
  onDelete,
}: {
  tasks: Task[];
  onToggleStatus: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-10 text-muted-foreground">
        No tasks found.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`p-6 border rounded-xl flex flex-col justify-between transition-all ${
            task.completed ? "bg-muted/50" : "bg-card shadow-sm"
          }`}
        >
          <div className="space-y-3">
            <div className="flex justify-between items-start">
              <h3
                className={`font-bold text-lg ${
                  task.completed ? "line-through opacity-50" : ""
                }`}
              >
                {task.title}
              </h3>
              <PriorityBadge priority={task.priority} />
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {task.description}
            </p>
            <div>
              <p className="text-[10px] uppercase font-bold text-muted-foreground">
                Assignee
              </p>
              <p className="text-sm font-medium uppercase">{task.assignee}</p>
            </div>
          </div>
          <Button
            onClick={() => onToggleStatus(task.id)}
            variant={task.completed ? "outline" : "default"}
            className="mt-6 w-full cursor-pointer"
          >
            {task.completed ? "Reopen Task" : "Complete Task"}
          </Button>
          {task.completed && (
            <Button
              variant={"destructive"}
              className="mt-6 w-full cursor-pointer"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}

function PriorityBadge({ priority }: { priority: string }) {
  const styles = {
    high: "bg-red-100 text-red-700",
    medium: "bg-yellow-100 text-yellow-700",
    low: "bg-green-100 text-green-700",
  };
  return (
    <span
      className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
        styles[priority as keyof typeof styles]
      }`}
    >
      {priority}
    </span>
  );
}
