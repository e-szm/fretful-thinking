import { useSearchParams } from "react-router-dom";

import { useGuitarParams } from "../../../../hooks/useGuitarParams";
import { useGuitarNavigate } from "../../../../hooks/useGuitarNavigate";

import Button from "../../../../shared/components/Button";

import Constants from "../../../../shared/classes/Constants";

const ResetTuning: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { numFrets, tuning } = useGuitarParams();
  const guitarNavigate = useGuitarNavigate();

  let disabled = true;
  if (tuning.length !== Constants.STD_TUNING.length) disabled = false;
  else
    tuning.forEach((note, i) => {
      if (note !== Constants.STD_TUNING[i]) disabled = false;
    });

  function onReset() {
    guitarNavigate({ numFrets, tuning: Constants.STD_TUNING }, searchParams);
  }

  return (
    <Button type="cta" onClick={onReset} disabled={disabled}>
      Reset Tuning
    </Button>
  );
};

export default ResetTuning;
