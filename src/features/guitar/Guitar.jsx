import styles from "./Guitar.module.css";
import Fretboard from "./fretboard/Fretboard";
import Head from "./head/head";

function Guitar({ fretboard }) {
  return (
    <div className={styles.guitar}>
      <Head fretboard={fretboard} />
      <Fretboard fretboard={fretboard} />
    </div>
  );
}

export default Guitar;
