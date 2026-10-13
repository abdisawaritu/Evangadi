import "./App.css";
import HandlingEvents from "./components/StatesExample/HandlingEvents";
import InitializingState from "./components/StatesExample/InitializingState";
import NormalVariable from "./components/StatesExample/NormalVariable";
import PassingPropsToStates from "./components/StatesExample/PassingPropsToStates";

function App() {
  return (
    <>
      <NormalVariable />
      <InitializingState />

      <PassingPropsToStates batch="May 2026" />

      <HandlingEvents />
    </>
  );
}

export default App;
