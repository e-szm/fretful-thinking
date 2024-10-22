import { useDispatch, useSelector } from "react-redux";

import {
  getStringTunings,
  updateStringTunings,
} from "../features/guitar/guitarSlice";

import styles from "./SelectNumStrings.module.css";

const MIN_STRINGS = 3;
const MAX_STRINGS = 8;

function SelectNumStrings() {
  const stringTunings = useSelector(getStringTunings);
  const dispatch = useDispatch();

  const numStrings = stringTunings.length;
  const atMinStrings = numStrings <= MIN_STRINGS;
  const atMaxStrings = numStrings >= MAX_STRINGS;

  function handleRemoveString() {
    const newStringTunings = stringTunings.slice(0, numStrings - 1);
    dispatch(updateStringTunings(newStringTunings));
  }

  function handleNewString() {
    const newStringTunings = [...stringTunings, "A"];
    dispatch(updateStringTunings(newStringTunings));
  }

  return (
    <div className={styles.btnContainer}>
      <button
        className={styles.btn}
        onClick={handleRemoveString}
        disabled={atMinStrings}
      >
        -
      </button>
      <p>{numStrings} strings</p>
      <button
        className={styles.btn}
        onClick={handleNewString}
        disabled={atMaxStrings}
      >
        +
      </button>
    </div>
  );
}

export default SelectNumStrings;
