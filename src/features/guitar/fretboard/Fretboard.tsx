import { useGuitarQuery } from "../../../hooks/useGuitarQuery";
import { useGuitarParams } from "../../../hooks/useGuitarParams";

import styles from "./Fretboard.module.css";
import Fret from "./fret/Fret";

import { GuitarFretboard } from "../../../shared/lib/types";

interface FretboardProps {
  fretboard: GuitarFretboard;
}

const Fretboard: React.FC<FretboardProps> = ({ fretboard }) => {
  const [{ note: noteFilter }] = useGuitarQuery();
  const { numFrets } = useGuitarParams();

  // the 'frets' state begins with open strings (the current tuning)
  const displayFretboard = fretboard.slice(1, numFrets + 1);

  return (
    <div className={styles.fretboard}>
      {displayFretboard.map((fret, i) => (
        <Fret key={i} fretNum={i + 1} fret={fret} noteFilter={noteFilter} />
      ))}
    </div>
  );
};

export default Fretboard;
