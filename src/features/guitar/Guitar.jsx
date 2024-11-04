import { useGuitarParams } from "../../hooks/useGuitarParams";
import { useGuitarQuery } from "../../hooks/useGuitarQuery";
import { generateFretboard } from "../../util/tuning";

import styles from "./Guitar.module.css";
import Fretboard from "./fretboard/Fretboard";
import Head from "./head/head";

function Guitar() {
  const [searchParams] = useGuitarQuery();
  const { tuning } = useGuitarParams();

  // the 'frets' state begins with open strings (the current tuning)
  const fretboard = generateFretboard({ ...searchParams, tuning });
  console.log(fretboard);

  return (
    <div className={styles.guitar}>
      <Head fretboard={fretboard} />
      <Fretboard fretboard={fretboard} />
    </div>
  );
}

export default Guitar;
