import { useState } from "react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((previousMode) => !previousMode);
  };

  const themeStyles = {
    backgroundColor: isDarkMode ? "#17212B" : "#F5F5F5",
    color: isDarkMode ? "#FFFFFF" : "#222222",
    minHeight: "100vh",
    padding: "30px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={themeStyles}>
      <h1>Theme Toggle App</h1>

      <p>Current theme: {isDarkMode ? "Dark Mode" : "Light Mode"}</p>

      <button onClick={toggleTheme}>
        {isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      </button>
    </div>
  );
}

export default ThemeToggle;
