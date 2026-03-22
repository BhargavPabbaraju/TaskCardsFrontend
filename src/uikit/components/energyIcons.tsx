import { styled, useTheme } from "@mui/material";
import BatteryAlert from "@mui/icons-material/BatteryAlertTwoTone";
import BatteryCharging20 from "@mui/icons-material/BatteryCharging20TwoTone";
import BatteryCharging50 from "@mui/icons-material/BatteryCharging50TwoTone";
import BatteryCharging80 from "@mui/icons-material/BatteryCharging80TwoTone";
import BatteryChargingFull from "@mui/icons-material/BatteryChargingFullTwoTone";

interface EnergyIconsProps {
  energy?: number;
}

function NoEnergyIcon() {
  return <BatteryAlert />;
}

function LowEnergyIcon() {
  return <BatteryCharging20 />;
}

function MediumEnergyIcon() {
  return <BatteryCharging50 />;
}

function HighEnergyIcon() {
  return <BatteryCharging80 />;
}

function HyperEnergyIcon() {
  return <BatteryChargingFull />;
}

function EnergyIcons({ energy }: EnergyIconsProps) {
  const theme = useTheme();
  const effectiveEnergy = energy ?? Math.floor(Math.random() * 5);

  switch (effectiveEnergy) {
    case 0:
      return <NoEnergyIcon />;
    case 1:
      return <LowEnergyIcon />;
    case 3:
      return <HighEnergyIcon />;
    case 4:
      return <HyperEnergyIcon />;
    default:
      return <MediumEnergyIcon />;
  }
}

export default EnergyIcons;
