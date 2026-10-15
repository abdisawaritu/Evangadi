import { useContext } from "react";
import { MyCountext } from "./MyProvider";

const Counter = () => {
    const {count , setCount} = useContext(MyCountext)


    // console.log(useContext(MyCountext))
   
  
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
