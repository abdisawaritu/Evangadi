import { createContext, useContext, useReducer } from "react";
import { initialState, reducer } from "../components/UseReducer/reducer.js";

const CounterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  const context = useContext(CounterContext);

  if (context === null) {
    throw new Error("useCounter must be used inside CounterProvider");
  }

  return context;
};
