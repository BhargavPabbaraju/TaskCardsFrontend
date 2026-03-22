import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme, styled } from "@mui/material/styles";
import { type DomainProps } from "../../utils/domain";
import EnergyIcons from "./energyIcons";
import { Divider } from "@mui/material";

interface StyledTitleStripProps {
  bgColor: string;
}

interface DomainCardProps {
  domainName: string;
  domain: DomainProps;
}

const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "bgColor",
})<StyledTitleStripProps>(({ theme, bgColor }) => ({
  backgroundColor: bgColor,
  width: "256px",
  aspectRatio: "5/7",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const StyledTitleStrip = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  alignItems: "center",
  textAlign: "center",
  justifyContent: "flex-start",
}));

const StyledTitleStripContainer = styled("div")(({ theme }) => ({
  height: "10%",
  display: "flex",
  padding: theme.spacing(1),
  alignItems: "center",
  textAlign: "center",
  justifyContent: "space-between",
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  margin: theme.spacing(1),
  borderRadius: theme.spacing(1),

  height: "100%",
}));

const TitleStripDivider = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.text.primary,
  height: theme.spacing(0.5),
  // boxShadow: "0 1px 4px gray",
}));

function TitleStrip({ domain }: { domain: DomainProps }) {
  const Icon = domain.icon;
  return (
    <StyledTitleStripContainer>
      <StyledTitleStrip>
        <Icon />
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          System Design
        </Typography>
      </StyledTitleStrip>
      <EnergyIcons />
    </StyledTitleStripContainer>
  );
}

function CardContentContainer() {
  const theme = useTheme();
  return (
    <StyledCardContent>
      <Typography>Card Content</Typography>
    </StyledCardContent>
  );
}

function DomainCard({ domainName, domain }: DomainCardProps) {
  const theme = useTheme();
  return (
    <StyledCard bgColor={domain.color}>
      <TitleStrip key={domainName} domain={domain} />
      <TitleStripDivider />
      <CardContentContainer />
      <CardActions
        sx={{
          height: "10%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button sx={{ color: theme.palette.getContrastText(domain.color) }}>
          {" "}
          Start{" "}
        </Button>
      </CardActions>
    </StyledCard>
  );
}

export default DomainCard;
