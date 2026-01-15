"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Task } from "@/types";
import React, { useMemo, useState } from "react";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window !== "undefined") {
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        try {
          return JSON.parse(savedTasks);
        } catch (error) {
          console.error("Error loading tasks from localStorage:", error);
        }
      }
    }
    return [];
  });
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredTasks = useMemo(() => {
    if (selectedFilter === "all") {
      return tasks;
    } else {
      return tasks.filter((task) => task.priority === selectedFilter);
    }
  }, [selectedFilter, tasks]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "" as "low" | "medium" | "high" | "",
    assignee: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data is Submitted:", formData);
    const uuid = uuidv4();

    if (
      !formData.title ||
      !formData.description ||
      !formData.priority ||
      !formData.assignee
    ) {
      toast.error("Fill all the required field");
      return;
    }

    // create a new Task
    const newTask = {
      id: uuid,
      title: formData.title,
      description: formData.description,
      priority: formData.priority as "low" | "high" | "medium",
      completed: false,
      assignee: formData.assignee,
    };

    // update the tasks
    const updateTasks: Task[] = [...tasks, newTask];
    setTasks(updateTasks);

    // save to local Storage
    localStorage.setItem("tasks", JSON.stringify(updateTasks));

    // reset the form
    setFormData({
      title: "",
      description: "",
      priority: "",
      assignee: "",
    });
  };

  return (
    <div>
      {/* form */}
      <form onSubmit={handleSubmit}>
        <div className="w-full max-w-7xl mx-auto p-7 space-y-3.5">
          {/* title */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="Title">Title*</Label>
            <Input
              id="Title"
              placeholder="Enter Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>

          {/* description */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="Description">Description*</Label>
            <Textarea
              id="Description"
              placeholder="Enter Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          {/* Assignee */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="Assignee">Assignee*</Label>
            <Input
              id="Assignee"
              placeholder="Enter Assignee"
              value={formData.assignee}
              onChange={(e) =>
                setFormData({ ...formData, assignee: e.target.value })
              }
            />
          </div>

          {/* Select Priorities */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="Priorities">Select Your Priorities*</Label>
            <Select
              value={formData.priority}
              onValueChange={(value: "low" | "medium" | "high") =>
                setFormData({ ...formData, priority: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your Priorities" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* submit btn */}
          <div className="mt-5">
            <Button variant={"default"}>Submit</Button>
          </div>
        </div>
      </form>
      <hr className="w-full max-w-7xl mx-auto mb-8" />
      {/* Filter */}
      <div className="max-w-7xl mx-auto px-7 py-4 flex items-center gap-4">
        <span className="text-sm font-medium">Filter by Priority:</span>
        <Select value={selectedFilter} onValueChange={setSelectedFilter}>
          <SelectTrigger className="w-45">
            <SelectValue placeholder="All Priorities" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priorities</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* All the Task */}
      {/* Task Grid Container */}
      <div className="max-w-7xl mx-auto p-7">
        {filteredTasks.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            No tasks found.{" "}
            {selectedFilter !== "all" && "Try changing the filter."}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                className={`flex flex-col justify-between p-6 border rounded-xl shadow-sm hover:shadow-md transition-shadow ${
                  task.completed ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h2 className="font-bold text-xl tracking-tight">
                      {task.title}
                      {task.completed && (
                        <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                          Completed
                        </span>
                      )}
                    </h2>
                    {/* Priority Badge Style */}
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold uppercase ${
                        task.priority === "high"
                          ? "bg-red-100 text-red-700"
                          : task.priority === "medium"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {task.priority}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm line-clamp-3">
                    {task.description}
                  </p>

                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground uppercase font-medium">
                      Assignee
                    </p>
                    <p className="text-sm font-medium">{task.assignee}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    className="w-full"
                    variant={task.completed ? "destructive" : "default"}
                  >
                    {task.completed ? "Mark as Pending" : "Mark as Done"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
