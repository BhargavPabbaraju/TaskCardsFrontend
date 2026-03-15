import { useState, useEffect } from "react";
import { getColors } from "../api";
import type { ColorModel } from "../types/models/colors";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { useTheme, styled } from "@mui/material/styles";
import { red, blue, yellow, purple, green } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Chip from "@mui/material/Chip";

const colorMap: Record<string, string> = {
  red: red[400],
  blue: blue[400],
  yellow: yellow[300],
  purple: purple[400],
  green: green[400],
};

const ColoredCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  minHeight: 120,
  transition: "transform 0.15s ease, box-shadow 0.15s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: theme.shadows[6],
  },
}));

const InfoChip = styled(Chip)(({ theme }) => ({
  fontWeight: 600,
  backdropFilter: "blur(2px)",
  backgroundColor: "rgba(255,255,255,0.28)",
  color: "inherit",
  borderRadius: theme.shape.borderRadius,
  "& .MuiChip-icon": {
    color: "inherit",
  },
}));

interface ColorItemProps {
  color: ColorModel;
}

function ColorItem({ color }: ColorItemProps) {
  const theme = useTheme();
  const bgColor = colorMap[color.color.toLowerCase()] ?? color.color;
  const textColor = theme.palette.getContrastText(bgColor);

  return (
    <ColoredCard sx={{ backgroundColor: bgColor, color: textColor }}>
      <CardContent sx={{ height: "100%", p: 3 }}>
        <Stack spacing={1.5} sx={{ height: "100%" }}>
          <Typography variant="h5" fontWeight={700}>
            {color.color}
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {color.description}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{ mt: "auto", flexWrap: "wrap" }}
          >
            {color.fun && (
              <InfoChip icon={<SportsEsportsIcon />} label="Fun" size="small" />
            )}
            {color.engaging && (
              <InfoChip
                icon={<PsychologyIcon />}
                label="Engaging"
                size="small"
              />
            )}
          </Stack>
        </Stack>
      </CardContent>
    </ColoredCard>
  );
}

function Colors() {
  const [colors, setColors] = useState<ColorModel[]>([]);

  useEffect(() => {
    getColors()
      .then((data) => setColors(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {colors.map((color) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={color.color}
            sx={{ display: "flex" }}
          >
            <ColorItem color={color} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Colors;
