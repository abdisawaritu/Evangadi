import { useCounter } from "../../context/CounterContext";

const Component2 = () => {
  const { state, dispatch } = useCounter();

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <hr />
      <h1>Component Two</h1>
      <h3>Count: {state.count}</h3>

      <button onClick={increment} style={{ marginRight: "20px" }}>
        Plus
      </button>

      <button onClick={decrement}>Minus</button>
    </div>
  );
};

export default Component2;
