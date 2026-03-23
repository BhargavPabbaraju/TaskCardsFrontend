import type { PokemonType } from "../../utils/cardColors";
import type { IconKey } from "../../utils/iconMap";

export interface Domain {
  domainType: string;
  icon: IconKey;
  key: string;
  name: string;
  pokemonType: PokemonType;
}

export interface Topic {
  id: number;
  name: string;
  description: string | null;
  domainSortOrder: number;
  domain: Domain;
}

export interface ChecklistItem {
  id: number;
  sortOrder: number;
  text: string;
}

export interface TaskLink {
  id: number;
  label: string;
  sortOrder: number;
  url: string;
}

export type EnergyLevel = "NIL" | "LOW" | "MEDIUM" | "HIGH" | "HYPER";

export interface TaskItem {
  id: number;
  description: string | null;
  estMins: number;
  isActive: boolean;
  minEnergy: EnergyLevel;
  topicSortOrder: number;
  domain: Domain;
  topic: Topic;
  checklistItems: ChecklistItem[];
  links: TaskLink[];
}
