import { useSearchParams } from "react-router-dom";

import { useGuitarParams } from "../hooks/useGuitarParams";
import { useGuitarNavigate } from "../hooks/useGuitarNavigate";

import Incrementer from "./Incrementer";

const MIN_STRINGS = 3;
const MAX_STRINGS = 8;

function SelectNumStrings() {
  const [searchParams] = useSearchParams();
  const { numFrets, tuning } = useGuitarParams();
  const navigateGuitar = useGuitarNavigate();

  const numStrings = tuning.length;
  const atMinStrings = numStrings <= MIN_STRINGS;
  const atMaxStrings = numStrings >= MAX_STRINGS;

  function handleRemoveString() {
    const newTuning = tuning.slice(0, numStrings - 1);
    navigateGuitar({ numFrets, tuning: newTuning }, searchParams);
  }

  function handleNewString() {
    const newTuning = [...tuning, "A"];
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
