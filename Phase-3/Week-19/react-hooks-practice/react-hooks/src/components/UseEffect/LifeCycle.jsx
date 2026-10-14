import { useEffect, useState } from "react";

const LifeCycle = () => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(20);

  // run when the component mounts

  useEffect(() => {
    console.log("hello world");
  } , [count , age]);

  return (
    <div>
      <h1>Funcational based components Life Cycle</h1>
      <div>
        <h2>count is : {count}</h2>
      </div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        {" "}
        Increment count{" "}
      </button>
      <br /> <br />
      <div>
        <h3> Age is : {age}</h3>
      </div>
      <button onClick={() => setAge((age) => age + 1)}>Increment Age</button>
    </div>
  );
};

export default LifeCycle;
