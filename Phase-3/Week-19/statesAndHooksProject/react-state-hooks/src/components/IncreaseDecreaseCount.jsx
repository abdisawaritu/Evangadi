import { useState } from "react";

function IncreaseDecreaseCount() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decreaseCount = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <div className="count-display">
        <h2>Initial click count: {count}</h2>
      </div>

      <div className="button-container">
        <button onClick={resetCount}>Reset count</button>

        <button onClick={increaseCount}>Increase count</button>

        <button onClick={decreaseCount}>Decrease count</button>
      </div>
    </div>
  );
}

export default IncreaseDecreaseCount;
