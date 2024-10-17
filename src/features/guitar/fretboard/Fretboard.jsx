import { generateTuning } from "../../../util/tuning";
import Fret from "./fret/Fret";

import styles from "./Fretboard.module.css";

function Fretboard() {
  const frets = generateTuning();

  return (
    <div className={styles.fretboard}>
      {frets.map((fret, i) => (
        <Fret key={i} fret={fret} />
      ))}
    </div>
  );
}

export default Fretboard;
