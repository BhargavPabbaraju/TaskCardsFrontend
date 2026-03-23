import { useEffect, useState } from "react";
import { getTaskItems } from "../api";
import TaskCard from "../uikit/components/task_card";
import { useTheme, styled } from "@mui/material/styles";
import { type TaskItem } from "../types/models/taskItem";

const StyledCardContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

function TaskItemCardsPage() {
  const [taskItems, setTaskItems] = useState<TaskItem[]>([]);

  useEffect(() => {
    getTaskItems()
      .then((data) => setTaskItems(data))
      .catch((err) => console.error(err));
  }, []);
  const theme = useTheme();
  return (
    <StyledCardContainer>
      {taskItems.map((taskItem) => (
        <TaskCard key={taskItem.id} taskItem={taskItem} />
      ))}
    </StyledCardContainer>
  );
}

export default TaskItemCardsPage;
