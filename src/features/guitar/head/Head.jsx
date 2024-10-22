import { useDispatch, useSelector } from "react-redux";

import { getStringTunings, updateStringTunings } from "../guitarSlice";
import { NOTES } from "../../../util/tuning";

import styles from "./Head.module.css";
import InputTuning from "./tuning/InputTuning";

function Head() {
  const stringTunings = useSelector(getStringTunings);
  const reversedTunings = stringTunings.toReversed();
  const dispatch = useDispatch();

  function handleFocus(e) {
    e.target.select();
  }

  function handleTune(e) {
    const value = e.target.value.toUpperCase();
    if (!NOTES.includes(value)) return;

    const newStringTunings = [...stringTunings];
    newStringTunings[e.target.dataset.stringnum] = value;
    dispatch(updateStringTunings(newStringTunings));
  }

  return (
    <div className={styles.tuningInputs}>
      {reversedTunings.map((tuning, i) => (
        <InputTuning
          note={tuning}
          key={i + tuning}
          onTune={handleTune}
          // Since we've reversed the array, need the opposite index to map appropriately when updating in handleTune
          stringNum={reversedTunings.length - i - 1}
          onFocus={handleFocus}
        />
      ))}
    </div>
  );
}

export default Head;
