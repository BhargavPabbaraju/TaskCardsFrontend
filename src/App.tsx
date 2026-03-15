import { Route, Routes } from "react-router-dom";
import "./App.css";
import Colors from "./components/Colors";
import HomePage from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/colors" element={<Colors />} />
    </Routes>
  );
}

export default App;
