import styles from "./Guitar.module.css";
import Fretboard from "./fretboard/Fretboard";
import Head from "./head/Head";

import { GuitarFretboard } from "../../shared/lib/types";

interface GuitarProps {
  fretboard: GuitarFretboard;
}

const Guitar: React.FC<GuitarProps> = ({ fretboard }) => {
  return (
    <div className={styles.guitar}>
      <Head fretboard={fretboard} />
      <Fretboard fretboard={fretboard} />
    </div>
  );
};

export default Guitar;
