import "./App.css";
import Counter from "./components/ContextApi/Counter";
import CounterDisplay from "./components/ContextApi/CounterDisplay";
import Auth from "./components/UseEffect/Auth";
import LifeCycle from "./components/UseEffect/LifeCycle";
import Component1 from "./components/UseReducer/Component1";
import Component2 from "./components/UseReducer/Component2";
import IncrementExample from "./components/UseState/IncrementExample";
import UpdateWithCallback from "./components/UseState/UpdateWithCallback";
import Welcome from "./components/Welcome";
import { CounterProvider } from "./context/CounterContext";

function App() {
  return (
    <>
      {/* <IncrementExample/> */}
      {/* <UpdateWithCallback/> */}

      {/* <LifeCycle/> */}

      {/* <Auth/> */}
      {/* <Counter /> */}
      {/* <CounterDisplay /> */}
      <CounterProvider>
        <Component1 />
        <Component2 />
      </CounterProvider>

      {/* <Welcome>Hello , welcome to react :</Welcome> */}
    </>
  );
}

export default App;
