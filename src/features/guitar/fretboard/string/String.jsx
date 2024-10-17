import Note from "../note/Note";
import styles from "./String.module.css";

function String({ note }) {
  return <div className={styles.string}>{note && <Note note={note} />}</div>;
}

export default String;
