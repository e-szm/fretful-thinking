import { useEffect, useRef } from "react";

import { useGuitarParams } from "../../hooks/useGuitarParams";
import { useQuiz } from "../quiz/QuizContext";
import { useTimer } from "./TimerContext";

import styles from "./Timer.module.css";

function formatSeconds(numSeconds) {
  const minutes = Math.floor(numSeconds / 60);
  const seconds = Math.floor(numSeconds % 60);

  return `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
}

function Timer() {
  const { numFrets, tuning } = useGuitarParams();
  const { nextNote } = useQuiz();
  const { timeLimit, tick, nextTick } = useTimer();
  const intervalRef = useRef(null);

  const displayTime =
    timeLimit === 0 ? (
      <div className={styles.infin}>&infin;</div>
    ) : (
      formatSeconds(tick)
    );

  useEffect(() => {
    if (timeLimit === 0) return;

    const intervalId = setInterval(() => {
      if (tick <= 0) nextNote(numFrets, tuning);
      nextTick();
    }, 1000);
    intervalRef.current = intervalId;

    return () => clearInterval(intervalId);
  }, [timeLimit, tick, nextTick, nextNote, numFrets, tuning]);

  return <div className={styles.timer}>{displayTime}</div>;
}

export default Timer;
