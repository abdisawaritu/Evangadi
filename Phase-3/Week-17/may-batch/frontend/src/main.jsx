import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // global syling
import App from "./App.jsx";
import StudentCard from "./StudentCard.jsx";
import StudentDashboard from "./StudentDashboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <StudentCard />
    <StudentDashboard />
  </StrictMode>,
);
