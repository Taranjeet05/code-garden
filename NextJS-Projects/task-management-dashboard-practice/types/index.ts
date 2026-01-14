export type Task = {
  id: number;
  title: string;
  priority: "low" | "medium" | "high";
  completed: boolean;
  assignee: string;
};
