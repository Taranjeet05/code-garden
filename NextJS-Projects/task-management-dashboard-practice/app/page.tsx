"use client";
import { useMemo, useState } from "react";
import { Task } from "@/types";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

import TaskForm from "@/components/TaskForm";
import TaskFilter from "@/components/TaskFilter";
import TaskList from "@/components/TaskList";

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    if (typeof window === "undefined") return [];

    try {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredTasks = useMemo(() => {
    return selectedFilter === "all"
      ? tasks
      : tasks.filter((t) => t.priority === selectedFilter);
  }, [selectedFilter, tasks]);

  const addTask = (data: Omit<Task, "id" | "completed">) => {
    const newTask: Task = { ...data, id: uuidv4(), completed: false };
    const updated = [...tasks, newTask];
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
    toast.success("Task created successfully!");
  };

  const toggleTaskStatus = (id: string) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };

  const deleteTask = (id: string) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
    localStorage.setItem("task", JSON.stringify(updated));
    toast.success("Task deleted Successfully");
  };

  return (
    <main className="max-w-7xl mx-auto p-7 space-y-8">
      <section>
        <h1 className="text-2xl font-bold mb-6">Task Management</h1>
        <TaskForm onSubmit={addTask} />
      </section>

      <hr />

      <section className="space-y-6">
        <TaskFilter value={selectedFilter} onChange={setSelectedFilter} />
        <TaskList tasks={filteredTasks} onToggleStatus={toggleTaskStatus} onDelete={deleteTask} />
      </section>
    </main>
  );
}
