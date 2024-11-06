import { useQuiz } from "./QuizContext";

import Button from "../../ui/Button";

function EndQuiz() {
  const { endQuiz } = useQuiz();

  return (
    <Button type="cta" onClick={endQuiz}>
      Stop
    </Button>
  );
}

export default EndQuiz;
