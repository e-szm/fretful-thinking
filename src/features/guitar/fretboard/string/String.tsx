import NoteClass from "../../../../shared/classes/Note";

import styles from "./String.module.css";
import Note from "../note/Note";
import Barre from "../barre/Barre";

interface StringProps {
  note: NoteClass | null;
}

// TODO: Need to add a hidden method to note for the quiz?
const String: React.FC<StringProps> = ({ note }) => {
  return (
    <div className={styles.stringContainer}>
      <div className={styles.string}></div>
      {note?.label && !note.isHidden && <Note note={note} />}
      {note?.isBarre && <Barre />}
    </div>
  );
};

export default String;
