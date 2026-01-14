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
import React, { useState } from "react";

const Home = () => {
  const tasks: Task[] = [
    {
      id: 1,
      title: "Learn Ts",
      description: "This is a demo description",
      priority: "high",
      completed: false,
      assignee: "Bob",
    },
    {
      id: 2,
      title: "Learn Js",
      description: "This is a demo description",
      priority: "medium",
      completed: false,
      assignee: "mike",
    },
    {
      id: 3,
      title: "Learn React",
      description: "This is a demo description",
      priority: "low",
      completed: false,
      assignee: "kim",
    },
  ];

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "" as "low" | "medium" | "high" | "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data is Submitted:", formData);
  };

  return (
    <div>
      {/* form */}
      <form onSubmit={handleSubmit}>
        <div className="w-full max-w-7xl mx-auto p-7 space-y-3.5">
          {/* title */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="Title">Title</Label>
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
            <Label htmlFor="Description">Description</Label>
            <Textarea
              id="Description"
              placeholder="Enter Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>

          {/* Select Priorities */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="Priorities">Select Your Priorities</Label>
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
        <Select>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-col justify-between p-6 bg-white border rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h2 className="font-bold text-xl tracking-tight">
                    {task.title}
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
      </div>
    </div>
  );
};

export default Home;
