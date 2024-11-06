import Note from "../note/Note";
import Barre from "../barre/Barre";
import styles from "./String.module.css";

function String({ note }) {
  return (
    <div className={styles.stringContainer}>
      <div className={styles.string}></div>
      {note?.note && !note.hidden && <Note note={note} />}
      {note?.isBarre && <Barre />}
    </div>
  );
}

export default String;
