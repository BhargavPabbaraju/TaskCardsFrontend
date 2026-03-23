import MemoryIcon from "@mui/icons-material/Memory";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import CleaningServicesIcon from "@mui/icons-material/CleaningServices";
import GitHubIcon from "@mui/icons-material/GitHub";

export const IconMap = {
  Memory: MemoryIcon,
  LocalLaundryService: LocalLaundryServiceIcon,
  CleaningServices: CleaningServicesIcon,
  GitHub: GitHubIcon,
} as const;

export type IconKey = keyof typeof IconMap;
