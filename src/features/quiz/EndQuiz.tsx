import { useTimer } from "../timer/TimerContext";

import Button from "../../shared/components/Button";

interface EndQuizProps {
  endQuiz(): void;
}

const EndQuiz: React.FC<EndQuizProps> = ({ endQuiz }) => {
  const { reset: resetTimer } = useTimer();

  function onEndQuiz() {
    endQuiz();
    resetTimer?.();
  }

  return (
    <Button type="cta" onClick={onEndQuiz}>
      Stop
    </Button>
  );
};

export default EndQuiz;
