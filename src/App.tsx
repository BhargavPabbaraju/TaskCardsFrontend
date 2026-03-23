import { Route, Routes } from "react-router-dom";
import "./App.css";
import Colors from "./components/Colors";
import CardsPage from "./uikit/pages/cards";
import TaskItemCardsPage from "./pages/taskItemCards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskItemCardsPage />} />
      <Route path="/colors" element={<Colors />} />
      <Route path="/cards" element={<CardsPage />} />
    </Routes>
  );
}

export default App;
