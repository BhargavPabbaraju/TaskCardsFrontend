import type { ColorModel } from "./types/models/colors";
import type { TaskItem } from "./types/models/taskItem";

export async function getColors(): Promise<ColorModel[]> {
  const res = await fetch("/api/colors");
  if (!res.ok) {
    throw new Error("Failed to fetch colors");
  }
  const data = await res.json();
  return data;
}

export async function getTaskItems(): Promise<TaskItem[]> {
  const res = await fetch("/api/task-items");
  if (!res.ok) {
    throw new Error("Failed to fetch task items");
  }
  const data = await res.json();
  return data;
}
