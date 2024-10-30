import { useGuitarQuery } from "../../../hooks/useGuitarQuery";
import { useGuitarParams } from "../../../hooks/useGuitarParams";
import { generateFretboard } from "../../../util/tuning";

import styles from "./Fretboard.module.css";
import Fret from "./fret/Fret";

function Fretboard() {
  const [searchParams] = useGuitarQuery();
  const { numFrets, tuning } = useGuitarParams();

  // the 'frets' state begins with open strings (the current tuning)
  const fretboard = generateFretboard({ ...searchParams, tuning }).slice(
    1,
    numFrets + 1
  );

  return (
    <div className={styles.fretboard}>
      {fretboard.map((fret, i) => (
        <Fret key={i} num={i + 1} fret={fret} noteFilter={searchParams.note} />
      ))}
    </div>
  );
}

export default Fretboard;
