import "./App.css";
import Counter from "./components/ContextApi/Counter";
import CounterDisplay from "./components/ContextApi/CounterDisplay";
import Auth from "./components/UseEffect/Auth";
import LifeCycle from "./components/UseEffect/LifeCycle";
import IncrementExample from "./components/UseState/IncrementExample";
import UpdateWithCallback from "./components/UseState/UpdateWithCallback";

function App() {
  return (
    <>
      {/* <IncrementExample/> */}
      {/* <UpdateWithCallback/> */}

      {/* <LifeCycle/> */}

      {/* <Auth/> */}
      <Counter />
      <CounterDisplay />
    </>
  );
}

export default App;
