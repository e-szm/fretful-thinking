import Note from "../note/Note";
import styles from "./String.module.css";

function String({ note }) {
  return (
    <div className={styles.stringContainer}>
      <div className={styles.string}></div>
      {note && <Note note={note} />}
    </div>
  );
}

export default String;
