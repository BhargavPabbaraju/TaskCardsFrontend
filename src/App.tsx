import { Route, Routes } from "react-router-dom";
import "./App.css";
import Colors from "./components/Colors";
import HomePage from "./pages/home";
import CardsPage from "./uikit/pages/cards";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/colors" element={<Colors />} />
      <Route path="/cards" element={<CardsPage />} />
    </Routes>
  );
}

export default App;
