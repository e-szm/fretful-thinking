import { useSelector } from "react-redux";

import { getFretTunings } from "../guitarSlice";

import Fret from "./fret/Fret";
import styles from "./Fretboard.module.css";

function Fretboard() {
  const frets = useSelector(getFretTunings);

  return (
    <div className={styles.fretboard}>
      {frets.map((fret, i) => (
        <Fret key={i} fret={fret} />
      ))}
    </div>
  );
}

export default Fretboard;
