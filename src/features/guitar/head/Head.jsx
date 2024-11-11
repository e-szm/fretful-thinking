import { createSearchParams } from "react-router-dom";

import { useGuitarParams } from "../../../hooks/useGuitarParams";
import { useGuitarQuery } from "../../../hooks/useGuitarQuery";
import { useGuitarNavigate } from "../../../hooks/useGuitarNavigate";
import { useQuiz } from "../../quiz/QuizContext";

import { NOTES } from "../../../util/generateFretboard/generateFretboard";

import styles from "./Head.module.css";
import InputTuning from "./tuning/InputTuning";

function handleFocus(e) {
  e.target.select();
}

function Head({ fretboard }) {
  const { status: quizStatus } = useQuiz();
  const [searchParams] = useGuitarQuery();
  const { numFrets } = useGuitarParams();
  const navigateGuitar = useGuitarNavigate();

  const { view } = searchParams;
  const tuning = fretboard[0].map((note) => {
    if (note && !note.hidden) return note;
    return null;
  });

  function handleTune(e) {
    let value = e.target.value.toUpperCase();
    if (!NOTES.includes(value)) return;

    const newTuning = tuning.map((note) => note.note);
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
          key={i}
          note={note}
          view={view}
          stringNum={i}
          onTune={handleTune}
          onFocus={handleFocus}
          disabled={view !== "all" || quizStatus === "in-progress"}
        />
      ))}
    </div>
  );
}

export default Head;
