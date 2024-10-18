import String from "../string/String";
import styles from "./Fret.module.css";

function Fret({ fret, noteFilter }) {
  return (
    <div className={styles.fret}>
      {noteFilter
        ? fret.map((note, i) => (
            <String key={i} note={noteFilter === note ? note : ""} />
          ))
        : fret.map((note, i) => <String key={i} note={note} />)}
    </div>
  );
}

export default Fret;
