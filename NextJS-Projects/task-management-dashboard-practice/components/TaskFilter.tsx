"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TaskFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const TaskFilter = ({ value, onChange }: TaskFilterProps) => {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-lg border shadow-sm">
      <span className="text-sm font-semibold text-gray-700">
        Filter by Priority:
      </span>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger className="w-45">
          <SelectValue placeholder="All Priorities" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Priorities</SelectItem>
          <SelectItem value="high">High Priority</SelectItem>
          <SelectItem value="medium">Medium Priority</SelectItem>
          <SelectItem value="low">Low Priority</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TaskFilter;
