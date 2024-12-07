import { useSearchParams } from "react-router-dom";

import { useGuitarParams } from "../../../hooks/useGuitarParams";
import { useGuitarNavigate } from "../../../hooks/useGuitarNavigate";

import Incrementer from "../../../shared/components/Incrementer";

import Constants from "../../../shared/classes/Constants";
import { GuitarTuning } from "../../../shared/lib/types";

function SelectNumStrings() {
  const [searchParams] = useSearchParams();
  const { numFrets, tuning } = useGuitarParams();
  const navigateGuitar = useGuitarNavigate();

  const numStrings = tuning.length;
  const atMinStrings = numStrings <= Constants.MIN_STRINGS;
  const atMaxStrings = numStrings >= Constants.MAX_STRINGS;

  function handleRemoveString() {
    const newTuning: GuitarTuning = tuning.slice(0, numStrings - 1);
    navigateGuitar({ numFrets, tuning: newTuning }, searchParams);
  }

  function handleNewString() {
    const newTuning: GuitarTuning = [...tuning, "A"];
    navigateGuitar({ numFrets, tuning: newTuning }, searchParams);
  }

  return (
    <Incrementer
      onDecrement={handleRemoveString}
      onIncrement={handleNewString}
      disableDec={atMinStrings}
      disableInc={atMaxStrings}
    >
      {numStrings} strings
    </Incrementer>
  );
}

export default SelectNumStrings;
