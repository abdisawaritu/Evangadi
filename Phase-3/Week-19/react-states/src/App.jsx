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
import UserContext from "./context/UserContext";
import UserProfile from "./components/UserProfile";
import WelcomeMessage from "./components/WelcomeMessage";
import ProductList from "./components/ProductList";

function App() {
  const user = {
    name: "Abdi",
    role: "Full Stack Developer",
  };

  return (
    <>
      {/* <UserContext.Provider value={user}>
        <div>
          <h1>My Application</h1>

          <UserProfile />
          <WelcomeMessage />
        </div>
      </UserContext.Provider> */}
      {/* <NormalVariable />
      <InitializingState />

      <PassingPropsToStates batch="May 2026" />

      <HandlingEvents />
      <UpdatingStates /> */}
      {/* <MyWillMountAndDidMount />
      <MyComponentDidUpdate /> */}
      {/* <MyComponentWillUnmount /> */}

      {/* <ReducerCounter /> */}
      <ProductList/>
    </>
  );
}

export default App;
