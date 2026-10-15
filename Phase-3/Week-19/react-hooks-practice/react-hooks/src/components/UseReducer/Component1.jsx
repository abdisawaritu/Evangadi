import { useCounter } from "../../context/CounterContext";

const Component1 = () => {
  const { state } = useCounter();

  return (
    <div>
      <h1>Component One</h1>
      <h3>Count: {state.count}</h3>
    </div>
  );
};

export default Component1;
