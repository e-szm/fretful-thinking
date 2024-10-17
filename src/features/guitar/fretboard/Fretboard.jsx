import { useSelector } from "react-redux";

import { getFretTunings, getNumFrets } from "../guitarSlice";

import Fret from "./fret/Fret";
import styles from "./Fretboard.module.css";

function Fretboard() {
  const frets = useSelector(getFretTunings);
  const numFrets = useSelector(getNumFrets);

  // Frets state begins with open strings (the current tuning)
  const displayFrets = frets.slice(1, numFrets + 1);

  return (
    <div className={styles.fretboard}>
      {displayFrets.map((fret, i) => (
        <Fret key={i} fret={fret} />
      ))}
    </div>
  );
}

export default Fretboard;
