import { useDispatch, useSelector } from "react-redux";

import {
  getStringTunings,
  updateStringTunings,
} from "../features/guitar/guitarSlice";
import { NOTES } from "../util/tuning";

import styles from "./SelectTuning.module.css";

const MIN_STRINGS = 3;
const MAX_STRINGS = 8;

function InputTuning({ note, stringNum, onTune, onFocus }) {
  return (
    <input
      className={styles.input}
      type="text"
      maxLength="2"
      value={note}
      data-stringnum={stringNum}
      onChange={onTune}
      onFocus={onFocus}
    />
  );
}

function SelectTuning() {
  const stringTunings = useSelector(getStringTunings);
  const dispatch = useDispatch();

  const atMinStrings = stringTunings.length <= MIN_STRINGS;
  const atMaxStrings = stringTunings.length >= MAX_STRINGS;

  function handleFocus(e) {
    e.target.select();
  }

  function handleTune(e) {
    if (!NOTES.includes(e.target.value)) return;

    const newStringTunings = [...stringTunings];
    newStringTunings[e.target.dataset.stringnum] = e.target.value;
    dispatch(updateStringTunings(newStringTunings));
  }

  function handleRemoveString() {
    const newStringTunings = stringTunings.slice(0, stringTunings.length - 1);
    dispatch(updateStringTunings(newStringTunings));
  }

  function handleNewString() {
    const newStringTunings = [...stringTunings, "A"];
    dispatch(updateStringTunings(newStringTunings));
  }

  return (
    <div className={styles.selectTuning}>
      <p>Your guitar&apos;s tuning:</p>
      <div className={styles.btnContainer}>
        <button
          className={styles.btn}
          onClick={handleRemoveString}
          disabled={atMinStrings}
        >
          Remove string
        </button>
        <button
          className={styles.btn}
          onClick={handleNewString}
          disabled={atMaxStrings}
        >
          Add string
        </button>
      </div>
      <div className={styles.tuningInputs}>
        {stringTunings.map((tuning, i) => (
          <InputTuning
            note={tuning}
            key={i + tuning}
            onTune={handleTune}
            stringNum={i}
            onFocus={handleFocus}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectTuning;
