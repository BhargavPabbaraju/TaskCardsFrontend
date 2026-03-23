import { red, blue, yellow, purple, green } from "@mui/material/colors";
import LaptopMac from "@mui/icons-material/LaptopMac";
import School from "@mui/icons-material/School";
import Countertops from "@mui/icons-material/Countertops";
import Code from "@mui/icons-material/Code";
import SportsEsports from "@mui/icons-material/SportsEsports";
import type { ElementType } from "react";
import { Colors, type TypeColor } from "./cardColors";

export interface DomainProps {
  color: TypeColor;
  icon: ElementType;
}

export const Domains: Record<string, DomainProps> = {
  work: {
    color: Colors.FIRE,
    icon: LaptopMac,
  },
  learning: {
    color: Colors.POISON,
    icon: School,
  },
  home: {
    color: Colors.ELECTRIC,
    icon: Countertops,
  },
  creative: {
    color: Colors.GRASS,
    icon: Code,
  },
  entertainment: {
    color: Colors.WATER,
    icon: SportsEsports,
  },
};
