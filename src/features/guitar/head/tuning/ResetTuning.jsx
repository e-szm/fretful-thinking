import { createSearchParams } from "react-router-dom";

import { useGuitarParams } from "../../../../hooks/useGuitarParams";
import { useGuitarQuery } from "../../../../hooks/useGuitarQuery";
import { useGuitarNavigate } from "../../../../hooks/useGuitarNavigate";

import Button from "../../../../ui/Button";

const STANDARD_TUNING = ["E", "A", "D", "G", "B", "E"];

function ResetTuning() {
  const [searchParams] = useGuitarQuery();
  const { numFrets, tuning } = useGuitarParams();
  const guitarNavigate = useGuitarNavigate();

  let disabled = true;
  tuning.forEach((note, i) => {
    if (note !== STANDARD_TUNING[i]) disabled = false;
  });

  function onReset() {
    guitarNavigate(
      { numFrets, tuning: STANDARD_TUNING },
      createSearchParams(searchParams)
    );
  }

  return (
    <Button type="cta" onClick={onReset} disabled={disabled}>
      Reset Tuning
    </Button>
  );
}

export default ResetTuning;
