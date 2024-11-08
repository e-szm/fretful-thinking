import { useQuiz } from "../features/quiz/QuizContext";
import { useTimer } from "./timer/TimerContext";
import { useGuitarParams } from "../hooks/useGuitarParams";
import { useGuitarQuery } from "../hooks/useGuitarQuery";

import { NOTES } from "../util/tuning";

import styles from "./FilterNotes.module.css";

function NoteFilter({ note, onClick, currentFilter }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.filter} ${currentFilter === note ? "active" : ""}`}
    >
      {note}
    </button>
  );
}

function FilterNotes({ fretboard }) {
  const [searchParams, setSearchParams] = useGuitarQuery();
  const { numFrets, tuning } = useGuitarParams();
  const {
    status: quizStatus,
    string: quizString,
    fret: quizFret,
    nextNote,
  } = useQuiz();
  const { reset: resetTimer } = useTimer();

  function handleClickFilter(clickedNote) {
    let newParams;
    if (clickedNote === searchParams.note) {
      newParams = { ...searchParams };
      delete newParams.note;
    } else newParams = { ...searchParams, note: clickedNote };

    setSearchParams(newParams);
  }

  function handleGuess(e, clickedNote) {
    const clickedEl = e.target;
    const answer = fretboard[quizFret][quizString].value;

    if (clickedNote === answer) {
      clickedEl.classList.add("correct");
      setTimeout(() => clickedEl.classList.remove("correct"), 500);
      nextNote(numFrets, tuning);
      resetTimer();
      return;
    }

    clickedEl.classList.add("wrong");
    setTimeout(() => clickedEl.classList.remove("wrong"), 500);
  }

  return (
    <div className={styles.filterContainer}>
      {NOTES.map((note) => (
        <NoteFilter
          key={note}
          note={note}
          onClick={
            quizStatus === "idle"
              ? () => handleClickFilter(note)
              : (e) => handleGuess(e, note)
          }
          currentFilter={searchParams.note}
        />
      ))}
    </div>
  );
}

export default FilterNotes;
