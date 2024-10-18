import Fretboard from "./fretboard/Fretboard";
import styles from "./Guitar.module.css";

function Guitar() {
  return (
    <div className={styles.guitar}>
      <Fretboard />
    </div>
  );
}

export default Guitar;
