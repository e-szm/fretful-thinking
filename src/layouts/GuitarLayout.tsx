import { useGuitarQuery } from "../hooks/useGuitarQuery";
import { useGuitarParams } from "../hooks/useGuitarParams";
import { generateFretboard } from "../util/generateFretboard/generateFretboard";

import { useQuiz } from "../features/quiz/QuizContext";

import styles from "./GuitarLayout.module.css";
import GuitarConfig from "../features/guitar/config/GuitarConfig";
import GuitarNavMenu from "../features/guitar/navMenu/GuitarNavMenu";
import Guitar from "../features/guitar/Guitar";

const GuitarLayout: React.FC = () => {
  const {
    status: quizStatus,
    noteCoords: [quizString, quizFret],
  } = useQuiz();
  const [guitarURLQuery] = useGuitarQuery();
  const params = useGuitarParams();

  const fretboard = generateFretboard({
    ...guitarURLQuery,
    ...params,
    quizInProgress: quizStatus === "in-progress",
  });
  // TODO: Setting quiz answer should be a method on Fretboard class?
  if (quizString && quizFret && fretboard[quizFret][quizString]) {
    const correctAnswer = fretboard[quizFret][quizString];
    correctAnswer.label = " ";
    correctAnswer.style = "gold";
  }

  return (
    <div className={styles.guitarLayout}>
      <GuitarConfig />
      <div className={styles.guitarContainer}>
        <GuitarNavMenu fretboard={fretboard} />
        <Guitar fretboard={fretboard} />
      </div>
    </div>
  );
};

export default GuitarLayout;
