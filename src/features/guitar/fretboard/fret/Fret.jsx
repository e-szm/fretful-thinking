import String from "../string/String";

import styles from "./Fret.module.css";

function Fret({ fret }) {
  return (
    <div className={styles.fret}>
      {fret.map((note, i) => (
        <String key={i} note={note} />
      ))}
    </div>
  );
}

export default Fret;
