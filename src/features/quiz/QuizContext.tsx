import { createContext, useContext, useReducer } from "react";
import getRandomInt from "../../util/getRandomInt";

// Quiz State
enum Statuses {
  Idle,
  InProgress,
}

interface QuizState {
  status: Statuses;
  noteCoords: NoteCoords;

  // Dispatch functions
  startQuiz?(frets: number, tuning: GuitarTuning): void;
  nextNote?(frets: number, tuning: GuitarTuning): void;
  endQuiz?(): void;
}

const initialState: QuizState = {
  status: Statuses.Idle,
  noteCoords: [undefined, undefined],
};

const QuizContext = createContext<QuizState>(initialState);

// Reducer & Actions
enum ActionTypes {
  Start = "quiz/start",
  Next = "quiz/next",
  End = "quiz/end",
}

type QuizAction =
  | {
      type: ActionTypes.Start | ActionTypes.Next;
      payload: { frets: number; tuning: GuitarTuning };
    }
  | {
      type: ActionTypes.End;
    };

function reducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case ActionTypes.Start:
      return {
        ...state,
        status: Statuses.InProgress,
        noteCoords: [
          getRandomInt(0, action.payload.tuning.length - 1),
          getRandomInt(1, action.payload.frets),
        ],
      };

    case ActionTypes.Next:
      return {
        ...state,
        noteCoords: [
          getRandomInt(0, action.payload.tuning.length - 1),
          getRandomInt(1, action.payload.frets),
        ],
      };

    case ActionTypes.End:
      return initialState;

    default:
      throw new Error("Unknown action type");
  }
}

interface QuizProviderProps {
  children: React.ReactElement;
}

const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [{ status, noteCoords }, dispatch] = useReducer(reducer, initialState);

  function startQuiz(frets: number, tuning: GuitarTuning) {
    if (status === Statuses.InProgress) return;
    dispatch({ type: ActionTypes.Start, payload: { frets, tuning } });
  }

  function nextNote(frets: number, tuning: GuitarTuning) {
    dispatch({ type: ActionTypes.Next, payload: { frets, tuning } });
  }

  function endQuiz() {
    dispatch({ type: ActionTypes.End });
  }

  return (
    <QuizContext.Provider
      value={{
        status,
        noteCoords,

        startQuiz,
        nextNote,
        endQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

function useQuiz() {
  const contextValue = useContext(QuizContext);
  if (!contextValue) throw new Error("QuizContext used outside provider");

  return contextValue;
}

export { QuizProvider, useQuiz }; // eslint-disable-line
