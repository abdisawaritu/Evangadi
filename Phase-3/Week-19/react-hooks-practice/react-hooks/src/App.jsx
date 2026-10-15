import "./App.css";
import ConnectionStatus from "./components/ConnectionStatus";
import Counter from "./components/ContextApi/Counter";
import CounterDisplay from "./components/ContextApi/CounterDisplay";
import Products from "./components/Products";
import QuantityCounter from "./components/QuantityCounter";
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
      {/* <CounterProvider>
        <Component1 />
        <Component2 />
      </CounterProvider> */}
      <QuantityCounter/>
      <ConnectionStatus/>
      <Products/>

      {/* <Welcome>Hello , welcome to react :</Welcome> */}
    </>
  );
}

export default App;
