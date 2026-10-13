import "./App.css";
import MyComponentDidUpdate from "./components/ReactLifeCycleMethods/MyComponentDidUpdate";
import MyComponentWillUnmount from "./components/ReactLifeCycleMethods/MyComponentWillUnmount";
import MyWillMountAndDidMount from "./components/ReactLifeCycleMethods/MyWillMountAndDidMount";
import ReducerCounter from "./components/ReducerCounter";
import HandlingEvents from "./components/StatesExample/HandlingEvents";
import InitializingState from "./components/StatesExample/InitializingState";
import NormalVariable from "./components/StatesExample/NormalVariable";
import PassingPropsToStates from "./components/StatesExample/PassingPropsToStates";
import UpdatingStates from "./components/StatesExample/UpdatingStates";

function App() {
  return (
    <>
      {/* <NormalVariable />
      <InitializingState />

      <PassingPropsToStates batch="May 2026" />

      <HandlingEvents />
      <UpdatingStates /> */}
      {/* <MyWillMountAndDidMount />
      <MyComponentDidUpdate /> */}
      {/* <MyComponentWillUnmount /> */}

      <ReducerCounter />
    </>
  );
}

export default App;
