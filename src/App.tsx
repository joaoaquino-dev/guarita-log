import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewShift from "./pages/NewShift";
import History from "./pages/History";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-shift" element={<NewShift />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}
