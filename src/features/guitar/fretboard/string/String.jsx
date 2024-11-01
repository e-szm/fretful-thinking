import Note from "../note/Note";
import Barre from "../barre/Barre";
import styles from "./String.module.css";

function String({ note, root }) {
  const isBarre = note === false;

  return (
    <div className={styles.stringContainer}>
      <div className={styles.string}></div>
      {note && <Note note={note} root={root} />}
      {isBarre && <Barre />}
    </div>
  );
}

export default String;
