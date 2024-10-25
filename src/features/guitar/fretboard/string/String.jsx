import Note from "../note/Note";
import styles from "./String.module.css";

function String({ note, root }) {
  return (
    <div className={styles.stringContainer}>
      <div className={styles.string}></div>
      {note && <Note note={note} root={root} />}
    </div>
  );
}

export default String;
