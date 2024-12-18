import NoteClass from "../../../../shared/classes/Note";

import styles from "./String.module.css";
import Note from "../note/Note";
import Barre from "../barre/Barre";

interface StringProps {
  note: NoteClass | null;
  stringNum: number;
}

const String: React.FC<StringProps> = ({ note, stringNum }) => {
  const height = stringNum + "px";

  return (
    <div className={styles.stringContainer}>
      <div className={styles.string} style={{ height }}></div>
      {note?.label && !note.isHidden && <Note note={note} />}
      {note?.isBarre && <Barre />}
    </div>
  );
};

export default String;
