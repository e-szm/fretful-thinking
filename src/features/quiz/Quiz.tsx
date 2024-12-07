import { useQuiz } from "./QuizContext";

import SelectNumStrings from "../guitar/navMenu/SelectNumStrings";
import SelectTimer from "../timer/SelectTimer";
import Timer from "../timer/Timer";
import StartQuiz from "./StartQuiz";
import EndQuiz from "./EndQuiz";
import ResetTuning from "../guitar/head/tuning/ResetTuning";

function Quiz() {
  const { status, startQuiz, endQuiz } = useQuiz();

  if (!startQuiz || !endQuiz)
    throw new Error("There was an issue with the Quiz component");

  return (
    <>
      {status === "idle" && (
        <>
          <ResetTuning />
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
