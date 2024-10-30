import { useSearchParams } from "react-router-dom";

import { useGuitarParams } from "../../../hooks/useGuitarParams";
import { NOTES } from "../../../util/tuning";

import styles from "./Head.module.css";
import InputTuning from "./tuning/InputTuning";
import { useGuitarNavigate } from "../../../hooks/useGuitarNavigate";

function Head() {
  const [searchParams] = useSearchParams();
  const { numFrets, tuning } = useGuitarParams();
  const navigateGuitar = useGuitarNavigate();

  const reversedTuning = tuning.toReversed();

  function handleFocus(e) {
    e.target.select();
  }

  function handleTune(e) {
    let value = e.target.value.toUpperCase();
    if (!NOTES.includes(value)) return;

    const newTuning = [...tuning];
    newTuning[e.target.dataset.stringnum] = value;

    navigateGuitar({ numFrets, tuning: newTuning }, searchParams);
  }

  return (
    <div className={styles.tuningInputs}>
      {reversedTuning.map((tuning, i) => (
        <InputTuning
          note={tuning}
          key={i + tuning}
          onTune={handleTune}
          // Since we've reversed the array, need the opposite index to map appropriately when updating in handleTune
          stringNum={reversedTuning.length - i - 1}
          onFocus={handleFocus}
        />
      ))}
    </div>
  );
}

export default Head;
