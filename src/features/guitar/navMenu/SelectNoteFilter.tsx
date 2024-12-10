import { useQuiz } from "../../quiz/QuizContext";
import { useTimer } from "../../timer/TimerContext";
import { useGuitarParams } from "../../../hooks/useGuitarParams";
import { useGuitarQuery } from "../../../hooks/useGuitarQuery";

import Constants from "../../../shared/classes/Constants";

import styles from "./SelectNoteFilter.module.css";
import NoteFilter from "./NoteFilter";

import { GuitarFretboard } from "../../../shared/lib/types";

interface SelectNoteFilterProps {
  fretboard: GuitarFretboard;
}

const SelectNoteFilter: React.FC<SelectNoteFilterProps> = ({ fretboard }) => {
  const [guitarURLQuery, setGuitarURLQuery] = useGuitarQuery();
  const { numFrets, tuning } = useGuitarParams();
  const {
    status: quizStatus,
    noteCoords: [quizString, quizFret],
    nextNote,
  } = useQuiz();
  const { reset: resetTimer } = useTimer();

  function handleClickFilter(clickedNote: string) {
    let newParams;
    if (clickedNote === guitarURLQuery.note) {
      newParams = { ...guitarURLQuery };
      delete newParams.note;
    } else newParams = { ...guitarURLQuery, note: clickedNote };

    setGuitarURLQuery(newParams);
  }

  function handleGuess(
    e: React.MouseEvent<HTMLButtonElement>,
    clickedNote: string
  ) {
    const clickedEl = e.currentTarget;

    let answer;
    if (quizFret && quizString && fretboard[quizFret][quizString])
      answer = fretboard[quizFret][quizString].value;

    if (clickedNote === answer) {
      clickedEl.classList.add("correct");
      setTimeout(() => clickedEl.classList.remove("correct"), 500);
      nextNote?.(numFrets, tuning);
      resetTimer?.();
      return;
    }

    clickedEl.classList.add("wrong");
    setTimeout(() => clickedEl.classList.remove("wrong"), 500);
  }

  return (
    <div className={styles.filterContainer}>
      {Constants.NOTES.map((note) => (
        <NoteFilter
          key={note}
          noteFilter={note}
          onClick={
            quizStatus === "idle"
              ? () => handleClickFilter(note)
              : (e) => handleGuess(e, note)
          }
          curFilter={guitarURLQuery.note}
        />
      ))}
    </div>
  );
};

export default SelectNoteFilter;
