import { useQuiz } from "./QuizContext";

import SelectNumStrings from "../../ui/SelectNumStrings";
import SelectTimer from "../../ui/SelectTimer";
import Timer from "../../ui/timer/Timer";
import EndQuiz from "./EndQuiz";
import StartQuiz from "./StartQuiz";

function Quiz() {
  const { status, startQuiz, endQuiz } = useQuiz();

  return (
    <>
      {status === "idle" && (
        <>
          <StartQuiz startQuiz={startQuiz} />
          <SelectNumStrings />
          <SelectTimer />
        </>
      )}
      {status === "in-progress" && (
        <>
          <EndQuiz endQuiz={endQuiz} />
          <Timer />
        </>
      )}
    </>
  );
}

export default Quiz;
