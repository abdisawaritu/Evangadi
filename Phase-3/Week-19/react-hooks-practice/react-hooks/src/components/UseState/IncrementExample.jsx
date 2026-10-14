import { useState } from "react";

const IncrementExample = () => {
  //   console.log(useState(0));
  const [count, setCount] = useState(0); // we call at the top levle of calling and initiazing
  const [age, setAge] = useState(18); // we can use multiple state with the components

  



  const increment = () => {
    // setCount(count + 10); // without using the callback inside the  secount  like that of setState
    // we use the callback inside the setCoutn

    setCount((prev) => prev + 10);
    setAge((prevValue) => prevValue + 1);
  };

  return (
    <div>
      <h1>Counte Example Using Hooks </h1>
      <h2>Count:{count}</h2>

      <h3>Age :{age}</h3>
      <button onClick={increment}>
        Increment By 10 For Count By 1 For Age{" "}
      </button>
    </div>
  );
};

export default IncrementExample;
