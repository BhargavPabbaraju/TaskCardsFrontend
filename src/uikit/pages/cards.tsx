import TaskCard from "../components/task_card";
import { useTheme, styled } from "@mui/material/styles";
import { Domains } from "../../utils/domain";

const StyledCardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

function CardsPage() {
  const theme = useTheme();
  return (
    <StyledCardContainer>
      {Object.entries(Domains).map(([domainName, domain]) => (
        <TaskCard domain={domain} key={domainName} domainName={domainName} />
      ))}
    </StyledCardContainer>
  );
}

export default CardsPage;
