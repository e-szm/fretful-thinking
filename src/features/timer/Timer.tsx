import { useEffect, useRef } from "react";

import { useGuitarParams } from "../../hooks/useGuitarParams";
import { useQuiz } from "../quiz/QuizContext";
import { useTimer } from "./TimerContext";

import styles from "./Timer.module.css";

function formatSeconds(numSeconds: number) {
  const minutes = Math.floor(numSeconds / 60);
  const seconds = Math.floor(numSeconds % 60);

  return `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

const Timer: React.FC = () => {
  const { numFrets, tuning } = useGuitarParams();
  const { nextNote } = useQuiz();
  const { timeLimit, secsRemaining, decSecsRemaining } = useTimer();
  const intervalRef = useRef<number>();

  const displayTime =
    timeLimit === 0 ? (
      <div className={styles.infin}>&infin;</div>
    ) : (
      formatSeconds(secsRemaining)
    );

  useEffect(() => {
    if (timeLimit === 0) return;

    const intervalId = setInterval(() => {
      if (secsRemaining <= 0) nextNote?.(numFrets, tuning);
      decSecsRemaining?.();
    }, 1000);
    intervalRef.current = intervalId;

    return () => clearInterval(intervalId);
  }, [timeLimit, secsRemaining, decSecsRemaining, nextNote, numFrets, tuning]);

  return <div className={styles.timer}>{displayTime}</div>;
};

export default Timer;
