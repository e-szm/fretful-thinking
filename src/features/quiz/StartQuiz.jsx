import { useGuitarParams } from "../../hooks/useGuitarParams";
import { useGuitarQuery } from "../../hooks/useGuitarQuery";

import Button from "../../ui/Button";

function StartQuiz({ startQuiz }) {
  const [searchParams, setSearchParams] = useGuitarQuery();
  const { numFrets, tuning } = useGuitarParams();

  function handleClickStart() {
    if (searchParams.note) setSearchParams({ view: "all" });
    startQuiz(numFrets, tuning);
  }

  return (
    <Button type="cta" onClick={handleClickStart}>
      Guess Random Notes
    </Button>
  );
}

export default StartQuiz;
