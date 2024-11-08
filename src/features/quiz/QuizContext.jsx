import { createContext, useContext, useReducer } from "react";

import getRandomInt from "../../util/getRandomInt";

const QuizContext = createContext(null);

const initialState = {
  status: "idle", // idle, in-progress
  string: null,
  fret: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "quiz/start":
      return {
        ...state,
        status: "in-progress",
        string: getRandomInt(0, action.payload.tuning.length - 1),
        fret: getRandomInt(1, action.payload.numFrets),
      };

    case "quiz/nextNote":
      return {
        ...state,
        string: getRandomInt(0, action.payload.tuning.length - 1),
        fret: getRandomInt(1, action.payload.numFrets),
      };

    case "quiz/end":
      return initialState;

    default:
      throw new Error("Unknown action type");
  }
}

function QuizProvider({ children }) {
  const [{ status, string, fret }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function startQuiz(numFrets, tuning) {
    if (status === "in-progress") return;
    dispatch({ type: "quiz/start", payload: { numFrets, tuning } });
  }

  function nextNote(numFrets, tuning) {
    dispatch({ type: "quiz/nextNote", payload: { numFrets, tuning } });
  }

  function endQuiz() {
    dispatch({ type: "quiz/end" });
  }

  return (
    <QuizContext.Provider
      value={{
        status,
        string,
        fret,

        startQuiz,
        nextNote,
        endQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const contextValue = useContext(QuizContext);
  if (!contextValue) throw new Error("QuizContext used outside provider");

  return contextValue;
}

export { QuizProvider, useQuiz }; // eslint-disable-line
