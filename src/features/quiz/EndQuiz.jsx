import { useQuiz } from "./QuizContext";
import { useTimer } from "../../ui/timer/TimerContext";

import Button from "../../ui/Button";

function EndQuiz() {
  const { endQuiz } = useQuiz();
  const { reset: resetTimer } = useTimer();

  function onEndQuiz() {
    endQuiz();
    resetTimer();
  }

  return (
    <Button type="cta" onClick={onEndQuiz}>
      Stop
    </Button>
  );
}

export default EndQuiz;
