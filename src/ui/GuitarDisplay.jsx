import { useGuitarQuery } from "../hooks/useGuitarQuery";
import { useGuitarParams } from "../hooks/useGuitarParams";
import { generateFretboard } from "../util/tuning";

import { useQuiz } from "../features/quiz/QuizContext";

import styles from "./GuitarDisplay.module.css";
import GuitarConfig from "./GuitarConfig";
import AppMenu from "./AppMenu";
import Guitar from "../features/guitar/Guitar";

function GuitarDisplay() {
  const { status: quizStatus, string: quizString, fret: quizFret } = useQuiz();
  const [searchParams] = useGuitarQuery();
  const params = useGuitarParams();

  // the 'frets' state begins with open strings (the current tuning)
  const fretboard = generateFretboard({
    ...searchParams,
    ...params,
    quizStatus,
  });
  if (quizString !== null && fretboard[quizFret]) {
    const correctAnswer = fretboard[quizFret][quizString];
    correctAnswer.hidden = false;
    correctAnswer.note = " ";
    correctAnswer.isRoot = true; // Set as gold
  }

  return (
    <div className={styles.guitarLayout}>
      <GuitarConfig />
      <div className={styles.guitarContainer}>
        <AppMenu fretboard={fretboard} />
        <Guitar fretboard={fretboard} />
      </div>
    </div>
  );
}

export default GuitarDisplay;
