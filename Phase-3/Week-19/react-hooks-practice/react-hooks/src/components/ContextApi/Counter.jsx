import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h1>This is the counter component</h1>
      <h2>Count:{count} </h2>
      <button onClick={increment}>ADD</button>
    </div>
  );
};

export default Counter;
