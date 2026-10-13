import "./App.css";
import IncreaseDecreaseCount from "./components/IncreaseDecreaseCount";
import MyCounter from "./components/MyCounter";
import PasswordToggle from "./components/PasswordToggle";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <>
      <MyCounter />

      <IncreaseDecreaseCount />

      <ThemeToggle />

      <PasswordToggle />
    </>
  );
}

export default App;
