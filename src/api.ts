import type { ColorModel } from "./types/models/colors";

export async function getColors(): Promise<ColorModel[]> {
  const res = await fetch("/api/colors");
  if (!res.ok) {
    throw new Error("Failed to fetch colors");
  }
  const data = await res.json();
  return data;
}
