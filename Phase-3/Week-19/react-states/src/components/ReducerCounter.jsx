function counterReducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;

    case "DECREASE":
      return state - 1;

    case "RESET":
      return 0;

    default:
      return state;
  }
}
import { useReducer } from "react";

function ReducerCounter() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={() => dispatch({ type: "INCREASE" })}>Increase</button>

      <button onClick={() => dispatch({ type: "DECREASE" })}>Decrease</button>

      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default ReducerCounter;
