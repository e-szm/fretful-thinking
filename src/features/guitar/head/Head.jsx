import { createSearchParams } from "react-router-dom";

import { useGuitarParams } from "../../../hooks/useGuitarParams";
import { useGuitarQuery } from "../../../hooks/useGuitarQuery";
import { useGuitarNavigate } from "../../../hooks/useGuitarNavigate";
import { NOTES } from "../../../util/tuning";

import styles from "./Head.module.css";
import InputTuning from "./tuning/InputTuning";

function handleFocus(e) {
  e.target.select();
}

function Head({ fretboard }) {
  const [searchParams] = useGuitarQuery();
  const { numFrets } = useGuitarParams();
  const navigateGuitar = useGuitarNavigate();

  const { view, note: noteFilter } = searchParams;
  const tuning = [...fretboard[0]];

  function handleTune(e) {
    let value = e.target.value.toUpperCase();
    if (!NOTES.includes(value)) return;

    const newTuning = [...tuning];
    newTuning[e.target.dataset.stringnum] = value;

    navigateGuitar(
      { numFrets, tuning: newTuning.toReversed() },
      createSearchParams(searchParams)
    );
  }

  return (
    <div className={styles.tuningInputs}>
      {tuning.map((note, i) => (
        <InputTuning
          key={i + note}
          note={note}
          noteFilter={noteFilter}
          view={view}
          stringNum={i}
          onTune={handleTune}
          onFocus={handleFocus}
        />
      ))}
    </div>
  );
}

export default Head;
