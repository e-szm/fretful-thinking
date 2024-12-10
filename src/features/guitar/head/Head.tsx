import { createSearchParams, URLSearchParamsInit } from "react-router-dom";

import { useGuitarParams } from "../../../hooks/useGuitarParams";
import { useGuitarQuery } from "../../../hooks/useGuitarQuery";
import { useGuitarNavigate } from "../../../hooks/useGuitarNavigate";
import { useQuiz } from "../../quiz/QuizContext";

import Constants from "../../../shared/classes/Constants";

import styles from "./Head.module.css";
import InputTuning from "./tuning/InputTuning";

import { GuitarFretboard } from "../../../shared/lib/types";

interface HeadProps {
  fretboard: GuitarFretboard;
}

const Head: React.FC<HeadProps> = ({ fretboard }) => {
  const { status: quizStatus } = useQuiz();
  const [guitarURLQuery] = useGuitarQuery();
  const { numFrets } = useGuitarParams();
  const navigateGuitar = useGuitarNavigate();

  const { view } = guitarURLQuery;
  const tuningNotes = fretboard[0].map((note) => {
    // TODO: Do not return note if note is hidden
    if (note) return note;
    return null;
  });

  function handleChangeTuning(
    e: React.ChangeEvent<HTMLInputElement>,
    guitarStringNum: number
  ) {
    const newNoteStr = e.currentTarget.value.toUpperCase();
    if (!Constants.NOTES.includes(newNoteStr)) return;

    const newTuning = tuningNotes.map((note) => {
      if (!note)
        throw new Error(
          "Invalid custom tuning: cannot have an empty string tuning"
        );
      return note.label;
    });
    newTuning[guitarStringNum] = newNoteStr;

    const searchParamsInit: URLSearchParamsInit = {};
    Object.entries(guitarURLQuery).forEach(
      (entry: [string, string]) => searchParamsInit[(entry[0] = entry[1])]
    );
    navigateGuitar(
      { numFrets, tuning: newTuning.toReversed() },
      createSearchParams(searchParamsInit)
    );
  }

  return (
    <div className={styles.tuningInputs}>
      {tuningNotes.map((note, i) => (
        <InputTuning
          key={i}
          note={note}
          onChange={(e) => handleChangeTuning(e, i)}
          disabled={view !== "all" || quizStatus === "in-progress"}
        />
      ))}
    </div>
  );
};

export default Head;
