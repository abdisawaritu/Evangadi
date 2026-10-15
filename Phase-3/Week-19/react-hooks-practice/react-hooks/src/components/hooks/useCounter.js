import { useState } from "react";

function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrease = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return {
    count,
    increase,
    decrease,
    reset,
  };
}

export default useCounter;
