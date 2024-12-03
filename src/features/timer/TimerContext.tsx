import { createContext, useContext, useReducer } from "react";

// Timer State
interface TimerState {
  timeLimit: number;
  secsRemaining: number;

  // Dispatch Functions
  decTimeLimit?(): void;
  incTimeLimit?(): void;
  decSecsRemaining?(): void;
  reset?(): void;
}

const initialState: TimerState = {
  timeLimit: 0,
  secsRemaining: 0,
};

const TimerContext = createContext<TimerState>(initialState);

// Reducer & Actions
enum ActionTypes {
  DecTimeLimit = "timer/decTimeLimit",
  IncTimeLimit = "timer/incTimeLimit",
  DecSecsRemaining = "timer/decSecsRemaining",
  Reset = "timer/reset",
}

type TimerAction = { type: ActionTypes };

function reducer(state: TimerState, action: TimerAction): TimerState {
  switch (action.type) {
    case ActionTypes.DecTimeLimit:
      if (state.timeLimit <= 0) return state;

      const decremented = state.timeLimit - 1;
      return {
        ...state,
        timeLimit: decremented,
        secsRemaining: decremented,
      };

    case ActionTypes.IncTimeLimit:
      const incremented = state.timeLimit + 1;
      return {
        ...state,
        timeLimit: incremented,
        secsRemaining: incremented,
      };

    case ActionTypes.DecSecsRemaining:
      if (state.secsRemaining <= 0)
        return { ...state, secsRemaining: state.timeLimit };
      return { ...state, secsRemaining: state.secsRemaining - 1 };

    case ActionTypes.Reset:
      return { ...state, secsRemaining: state.timeLimit };

    default:
      throw new Error("Unknown action type");
  }
}

// Context Provider
interface TimerProviderProps {
  children: React.ReactElement;
}

const TimerProvider: React.FC<TimerProviderProps> = ({ children }) => {
  const [{ timeLimit, secsRemaining }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function decTimeLimit() {
    dispatch({ type: ActionTypes.DecTimeLimit });
  }

  function incTimeLimit() {
    dispatch({ type: ActionTypes.IncTimeLimit });
  }

  function decSecsRemaining() {
    dispatch({ type: ActionTypes.DecSecsRemaining });
  }

  function reset() {
    dispatch({ type: ActionTypes.Reset });
  }

  return (
    <TimerContext.Provider
      value={{
        timeLimit,
        secsRemaining,

        decTimeLimit,
        incTimeLimit,
        decSecsRemaining,
        reset,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

function useTimer() {
  const contextValue = useContext(TimerContext);
  if (!contextValue) throw new Error("TimerContext used outside provider");

  return contextValue;
}

export { TimerProvider, useTimer }; // eslint-disable-line
