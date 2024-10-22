import styles from "./Guitar.module.css";
import Fretboard from "./fretboard/Fretboard";
import Head from "./head/head";

function Guitar() {
  return (
    <div className={styles.guitar}>
      <Head />
      <Fretboard />
    </div>
  );
}

export default Guitar;
