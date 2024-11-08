import { createContext, useContext, useReducer } from "react";

const initialState = {
  timeLimit: 0,
  tick: 0,
};

const TimerContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "timer/decTimeLimit":
      return {
        ...state,
        timeLimit: state.timeLimit - 1,
        tick: state.timeLimit - 1,
      };

    case "timer/incTimeLimit":
      return {
        ...state,
        timeLimit: state.timeLimit + 1,
        tick: state.timeLimit + 1,
      };

    case "timer/nextTick":
      if (state.tick <= 0) return { ...state, tick: state.timeLimit };
      return { ...state, tick: state.tick - 1 };

    case "timer/reset":
      return { ...state, tick: state.timeLimit };

    default:
      throw new Error("Unknown action type");
  }
}

function TimerProvider({ children }) {
  const [{ timeLimit, tick }, dispatch] = useReducer(reducer, initialState);

  function decTimeLimit() {
    dispatch({ type: "timer/decTimeLimit" });
  }

  function incTimeLimit() {
    dispatch({ type: "timer/incTimeLimit" });
  }

  function nextTick() {
    dispatch({ type: "timer/nextTick" });
  }

  function reset() {
    dispatch({ type: "timer/reset" });
  }

  return (
    <TimerContext.Provider
      value={{
        timeLimit,
        tick,

        decTimeLimit,
        incTimeLimit,
        nextTick,
        reset,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

function useTimer() {
  const contextValue = useContext(TimerContext);
  if (!contextValue) throw new Error("TimerContext used outside provider");

  return contextValue;
}

export { TimerProvider, useTimer }; // eslint-disable-line
