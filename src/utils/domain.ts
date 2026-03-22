import { red, blue, yellow, purple, green } from "@mui/material/colors";
import LaptopMac from "@mui/icons-material/LaptopMac";
import School from "@mui/icons-material/School";
import Countertops from "@mui/icons-material/Countertops";
import Code from "@mui/icons-material/Code";
import SportsEsports from "@mui/icons-material/SportsEsports";
import type { ElementType } from "react";

export interface DomainProps {
  color: string;
  icon: ElementType;
}

export const Domains: Record<string, DomainProps> = {
  work: {
    color: red[400],
    icon: LaptopMac,
  },
  learning: {
    color: purple[400],
    icon: School,
  },
  home: {
    color: yellow[300],
    icon: Countertops,
  },
  creative: {
    color: green[400],
    icon: Code,
  },
  entertainment: {
    color: blue[400],
    icon: SportsEsports,
  },
};
