import { createContext } from "react";
export const MyCountext = createContext();
import { useState } from "react";
const MyProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const data = {
    count,
    setCount,
  };

  return <MyCountext.Provider value={data}>
    
    {children}
    
    
    </MyCountext.Provider>;
};

export default MyProvider;
