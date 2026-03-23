import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTheme, styled } from "@mui/material/styles";
import EnergyIcons from "./energyIcons";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Timer from "@mui/icons-material/Timer";
import Stack from "@mui/material/Stack";
import { type TypeColor, getColor } from "../../utils/cardColors";
import type {
  ChecklistItem,
  Domain,
  TaskItem,
  TaskLink,
} from "../../types/models/taskItem";
import { IconMap } from "../../utils/iconMap";
import List from "@mui/material/List";
import { formatMinutes } from "../../utils/time";

interface WithBgColorProps {
  taskItem: TaskItem;
  bgColor: TypeColor;
}

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "bgColor",
})<WithBgColorProps>(({ theme, bgColor }) => ({
  //backgroundColor: bgColor,
  background: `linear-gradient(
  180deg,
  ${bgColor.light} 0%,
  ${bgColor.main} 45%,
  ${bgColor.dark} 100%
)`,
  width: "256px",
  aspectRatio: "5/7",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: theme.spacing(2),
  overflow: "hidden",
  boxShadow: "0 6px 14px rgba(0,0,0,0.18), 0 2px 4px rgba(0,0,0,0.12)",
}));

const StyledCardHeader = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
  textAlign: "center",
  justifyContent: "flex-start",
  minWidth: 0,
}));

const StyledCardHeaderContainer = styled("div")(({ theme }) => ({
  //height: "10%",
  display: "flex",
  padding: theme.spacing(1, 1.5),
  alignItems: "center",
  textAlign: "center",
  justifyContent: "space-between",
  minHeight: 48,
  background: "rgba(0,0,0,0.1)",
  backdropFilter: "blur(2px)",
  borderBottom: "1px solid rgba(0,0,0,0.12)",
}));

const StyledCardBody = styled(CardContent, {
  shouldForwardProp: (prop) => prop !== "bgColor",
})<WithBgColorProps>(({ theme, bgColor }) => ({
  backgroundColor: theme.palette.background.paper,
  margin: theme.spacing(1),
  borderRadius: theme.spacing(2),
  border: `2px solid ${bgColor.dark}`,
  boxShadow: `
  inset 0 2px 6px rgba(0,0,0,0.15),
  0 2px 4px rgba(0,0,0,0.08)
`,
  flex: 1,
  overflow: "hidden",
}));

function CardHeader({ domain }: { domain: Domain }) {
  const Icon = IconMap[domain.icon];
  return (
    <StyledCardHeaderContainer>
      <StyledCardHeader>
        <Icon fontSize="small" />
        <Typography
          variant="body1"
          sx={{
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          {domain.name}
        </Typography>
      </StyledCardHeader>
      <EnergyIcons />
    </StyledCardHeaderContainer>
  );
}

function TaskTitle({ title }: { title: string }) {
  return (
    <Typography
      variant="subtitle1"
      fontWeight={600}
      style={{
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}
    >
      {title}
    </Typography>
  );
}
function TaskDescription({ description }: { description: string | null }) {
  return (
    <Typography
      variant="subtitle2"
      style={{
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}
    >
      {description}
    </Typography>
  );
}
function Checklist({ checklist }: { checklist: ChecklistItem[] }) {
  const theme = useTheme();
  const checklistItems = [...checklist].sort(
    (a, b) => a.sortOrder - b.sortOrder
  );
  return (
    <List>
      {checklistItems.map((listItem) => (
        <Stack
          direction="row"
          spacing={theme.spacing(0.1)}
          style={{ display: "flex", alignItems: "center", textAlign: "left" }}
        >
          <Checkbox size="small" />
          <Typography variant="body2">{listItem.text}</Typography>
        </Stack>
      ))}
    </List>
  );
}

function Links({ links }: { links: TaskLink[] }) {
  const theme = useTheme();
  const linkItems = [...links].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <Box sx={{ mt: 1 }}>
      {links.length > 0 && (
        <>
          <Typography variant="caption" color="text.secondary">
            Resources
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            {linkItems.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferer"
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        </>
      )}
    </Box>
  );
}

function CardBody({
  taskItem,
  bgColor,
}: {
  taskItem: TaskItem;
  bgColor: TypeColor;
}) {
  const description = taskItem.description ?? taskItem.topic.description;
  return (
    <StyledCardBody taskItem={taskItem} bgColor={bgColor}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          minHeight: 0,
        }}
      >
        <TaskTitle title={taskItem.topic.name} />
        <Box mt={0.5} />
        {description && <TaskDescription description={description} />}
        <Box mt={1} />
        <Box sx={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
          <Checklist checklist={taskItem.checklistItems} />
          <Links links={taskItem.links} />
        </Box>
      </Box>
    </StyledCardBody>
  );
}

function CardFooter({ taskItem, bgColor }: WithBgColorProps) {
  const theme = useTheme();
  return (
    <div
      style={{
        height: "10%",
        display: "flex",
        justifyContent: "center",
        color: theme.palette.getContrastText(bgColor.dark),
        background: `linear-gradient(
            180deg,
            rgba(0,0,0,0.0) 0%,
            rgba(0,0,0,0.12) 100%
            )`,
        padding: theme.spacing(0.5),
        borderTop: "1px solid rgba(0,0,0,0.12)",
      }}
    >
      <Stack direction="row" spacing={1}>
        <Timer />
        <Typography variant="body1" fontSize="medium">
          {formatMinutes(taskItem.estMins)}
        </Typography>
      </Stack>
    </div>
  );
}

function TaskCard({ taskItem }: { taskItem: TaskItem }) {
  const theme = useTheme();
  const bgColor = getColor(taskItem.topic.domain.pokemonType);
  return (
    <StyledCard taskItem={taskItem} bgColor={bgColor}>
      <CardHeader domain={taskItem.topic.domain} />
      <CardBody taskItem={taskItem} bgColor={bgColor} />
      <CardFooter taskItem={taskItem} bgColor={bgColor} />
    </StyledCard>
  );
}

export default TaskCard;
