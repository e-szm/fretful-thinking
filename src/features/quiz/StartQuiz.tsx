import { useGuitarParams } from "../../hooks/useGuitarParams";
import { useGuitarQuery } from "../../hooks/useGuitarQuery";

import Button from "../../shared/components/Button";

import { GuitarTuning } from "../../shared/lib/types";

interface StartQuizProps {
  startQuiz(frets: number, tuning: GuitarTuning): void;
}

const StartQuiz: React.FC<StartQuizProps> = ({ startQuiz }) => {
  const [guitarURLQuery, setGuitarURLQuery] = useGuitarQuery();
  const { numFrets, tuning } = useGuitarParams();

  function handleClickStart() {
    if (guitarURLQuery.note) setGuitarURLQuery({ view: "all" });
    startQuiz(numFrets, tuning);
  }

  return (
    <Button type="cta" onClick={handleClickStart}>
      Start Challenge
    </Button>
  );
};

export default StartQuiz;
