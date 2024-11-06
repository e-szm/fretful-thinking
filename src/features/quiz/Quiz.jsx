import EndQuiz from "./EndQuiz";
import { useQuiz } from "./QuizContext";
import StartQuiz from "./StartQuiz";

function Quiz() {
  const { status, startQuiz, endQuiz } = useQuiz();

  return (
    <>
      {status === "idle" && <StartQuiz startQuiz={startQuiz} />}
      {status === "in-progress" && <EndQuiz endQuiz={endQuiz} />}
    </>
  );
}

export default Quiz;
