"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface TaskFormProps {
  onSubmit: (data: {
    title: string;
    description: string;
    priority: "low" | "medium" | "high";
    assignee: string;
  }) => void;
}

type TaskFormData = {
  title: string;
  description: string;
  priority: "low" | "medium" | "high" | "";
  assignee: string;
};

export default function TaskForm({ onSubmit }: TaskFormProps) {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    priority: "" as "low" | "medium" | "high" | "",
    assignee: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.description ||
      !formData.priority ||
      !formData.assignee
    ) {
      toast.error("Please fill all required fields");
      return;
    }
    onSubmit({
      title: formData.title,
      description: formData.description,
      priority: formData.priority,
      assignee: formData.assignee,
    });
    setFormData({ title: "", description: "", priority: "", assignee: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-slate-50 p-6 rounded-xl border"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label>Title*</Label>
          <Input
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="What needs to be done?"
          />
        </div>
        <div className="space-y-2">
          <Label>Assignee*</Label>
          <Input
            value={formData.assignee}
            onChange={(e) =>
              setFormData({ ...formData, assignee: e.target.value })
            }
            placeholder="Name"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Description*</Label>
        <Textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </div>

      <div className="flex items-end gap-4">
        <div className="flex-1 space-y-2">
          <Label>Priority*</Label>
          <Select
            value={formData.priority}
            onValueChange={(v: "low" | "high" | "medium") =>
              setFormData({ ...formData, priority: v })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit">Add Task</Button>
      </div>
    </form>
  );
}
